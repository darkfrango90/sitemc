import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { openWhatsApp } from '../../utils/whatsapp';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(39, 174, 96, 0.4);
  transition: all 0.3s ease;
  animation: ${bounce} 2s infinite;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(39, 174, 96, 0.6);
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s ease-out;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const HeaderText = styled.div`
  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    font-size: 12px;
    opacity: 0.9;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f8f9fa;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  animation: ${fadeIn} 0.3s ease-out;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  background: ${props => props.isUser ? '#27ae60' : 'white'};
  color: ${props => props.isUser ? 'white' : '#333'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

const MessageTime = styled.span`
  font-size: 11px;
  color: #999;
  margin-top: 4px;
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: white;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 80px;
  animation: ${fadeIn} 0.3s ease-out;
  
  span {
    width: 6px;
    height: 6px;
    background: #999;
    border-radius: 50%;
    animation: ${bounce} 1.4s infinite ease-in-out;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }
`;

const QuickRepliesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const QuickReply = styled.button`
  background: #e3f2fd;
  border: 1px solid #27ae60;
  color: #27ae60;
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #27ae60;
    color: white;
  }
`;

const ChatInput = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #eee;
  background: white;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const InputField = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 14px;
  outline: none;
  
  &:focus {
    border-color: #27ae60;
  }
`;

const SendButton = styled.button`
  background: #27ae60;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  
  &:hover {
    background: #219a52;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

// Estados da conversa
const CONVERSATION_STATES = {
  GREETING: 'greeting',
  COLLECTING_NAME: 'collecting_name',
  COLLECTING_PHONE: 'collecting_phone',
  COLLECTING_EMAIL: 'collecting_email',
  COLLECTING_PROJECT: 'collecting_project',
  COLLECTING_LOCATION: 'collecting_location',
  FINALIZING: 'finalizing',
  COMPLETED: 'completed'
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationState, setConversationState] = useState(CONVERSATION_STATES.GREETING);
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    location: ''
  });
  const [quickReplies, setQuickReplies] = useState([]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Olá! 👋 Sou a assistente virtual da Mineração Cezar! 😊\n\nEstou aqui para te ajudar com informações sobre nossos produtos e fazer um orçamento personalizado.\n\nPara começar, qual é o seu nome?");
        setConversationState(CONVERSATION_STATES.COLLECTING_NAME);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text, replies = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        isUser: false,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
      setQuickReplies(replies);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }]);
    setQuickReplies([]);
  };

  const handleUserInput = (text) => {
    addUserMessage(text);
    setInputValue('');
    processUserInput(text);
  };

  const processUserInput = (input) => {
    const cleanInput = input.trim();
    
    switch (conversationState) {
      case CONVERSATION_STATES.COLLECTING_NAME:
        setLeadData(prev => ({ ...prev, name: cleanInput }));
        setTimeout(() => {
          addBotMessage(`Prazer em conhecê-lo, ${cleanInput}! 😊\n\nAgora preciso do seu WhatsApp para enviarmos o orçamento. Qual é o seu número?`);
          setConversationState(CONVERSATION_STATES.COLLECTING_PHONE);
        }, 500);
        break;

      case CONVERSATION_STATES.COLLECTING_PHONE:
        setLeadData(prev => ({ ...prev, phone: cleanInput }));
        setTimeout(() => {
          addBotMessage("Perfeito! 📱\n\nPoderia me informar seu e-mail também? (Opcional, mas nos ajuda a enviar informações técnicas)");
          setConversationState(CONVERSATION_STATES.COLLECTING_EMAIL);
          setQuickReplies(['Pular e-mail']);
        }, 500);
        break;

      case CONVERSATION_STATES.COLLECTING_EMAIL:
        if (cleanInput.toLowerCase() !== 'pular e-mail') {
          setLeadData(prev => ({ ...prev, email: cleanInput }));
        }
        setTimeout(() => {
          addBotMessage("Ótimo! 👍\n\nAgora me conte: que tipo de projeto você tem em mente?", [
            'Piscina',
            'Construção Civil',
            'Poço Artesiano',
            'Paisagismo',
            'Decoração',
            'Outro'
          ]);
          setConversationState(CONVERSATION_STATES.COLLECTING_PROJECT);
        }, 500);
        break;

      case CONVERSATION_STATES.COLLECTING_PROJECT:
        setLeadData(prev => ({ ...prev, project: cleanInput }));
        setTimeout(() => {
          addBotMessage("Excelente escolha! 🎯\n\nPara calcularmos o frete, em qual cidade você está localizado?");
          setConversationState(CONVERSATION_STATES.COLLECTING_LOCATION);
        }, 500);
        break;

      case CONVERSATION_STATES.COLLECTING_LOCATION:
        setLeadData(prev => ({ ...prev, location: cleanInput }));
        setTimeout(() => {
          finalizeLead(cleanInput);
        }, 500);
        break;

      default:
        // Resposta padrão para outras situações
        setTimeout(() => {
          addBotMessage("Obrigado pela mensagem! Nossa equipe analisará sua solicitação. 😊");
        }, 500);
        break;
    }
  };

  const finalizeLead = (location) => {
    const updatedLeadData = { ...leadData, location };
    
    addBotMessage(`Perfeito, ${updatedLeadData.name}! 🎉\n\nTenho todas as informações necessárias:\n\n📋 **Resumo do seu contato:**\n• Nome: ${updatedLeadData.name}\n• WhatsApp: ${updatedLeadData.phone}\n• E-mail: ${updatedLeadData.email || 'Não informado'}\n• Projeto: ${updatedLeadData.project}\n• Localização: ${updatedLeadData.location}\n\nVou te direcionar para nosso WhatsApp agora para que nossa equipe possa fazer um orçamento personalizado! 🚀`, [
      'Ir para WhatsApp'
    ]);
    
    setConversationState(CONVERSATION_STATES.FINALIZING);
    
    // Auto-enviar para WhatsApp após 3 segundos
    setTimeout(() => {
      sendLeadToWhatsApp(updatedLeadData);
    }, 3000);
  };

  const sendLeadToWhatsApp = (data) => {
    const message = `🌟 *NOVO LEAD DO SITE* 🌟\n\n` +
                   `👤 *Nome:* ${data.name}\n` +
                   `📱 *WhatsApp:* ${data.phone}\n` +
                   `📧 *E-mail:* ${data.email || 'Não informado'}\n` +
                   `🎯 *Projeto:* ${data.project}\n` +
                   `📍 *Localização:* ${data.location}\n\n` +
                   `💬 *Mensagem:* Cliente interessado em orçamento para ${data.project}. ` +
                   `Dados coletados via chat do site.\n\n` +
                   `⏰ *Data/Hora:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                   `🚀 *Próximos passos:* Entrar em contato para orçamento personalizado.`;

    openWhatsApp(message);
    
    setConversationState(CONVERSATION_STATES.COMPLETED);
    setTimeout(() => {
      addBotMessage("Obrigado! Você foi direcionado para nosso WhatsApp. Nossa equipe entrará em contato em breve! 😊\n\nSe precisar de mais alguma coisa, estarei aqui! 👋");
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    handleUserInput(reply);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      handleUserInput(inputValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <ChatContainer>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <HeaderInfo>
              <Avatar>🏔️</Avatar>
              <HeaderText>
                <h4>Mineração Cezar</h4>
                <p>Online - Respondemos rapidamente</p>
              </HeaderText>
            </HeaderInfo>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </ChatHeader>
          
          <ChatMessages>
            {messages.map(message => (
              <Message key={message.id} isUser={message.isUser}>
                <MessageBubble isUser={message.isUser}>
                  {message.text}
                </MessageBubble>
                <MessageTime>{message.timestamp}</MessageTime>
              </Message>
            ))}
            
            {isTyping && (
              <Message isUser={false}>
                <TypingIndicator>
                  <span></span>
                  <span></span>
                  <span></span>
                </TypingIndicator>
              </Message>
            )}
            
            {quickReplies.length > 0 && !isTyping && (
              <QuickRepliesContainer>
                {quickReplies.map((reply, index) => (
                  <QuickReply key={index} onClick={() => handleQuickReply(reply)}>
                    {reply}
                  </QuickReply>
                ))}
              </QuickRepliesContainer>
            )}
            
            <div ref={messagesEndRef} />
          </ChatMessages>
          
          <ChatInput>
            <InputField
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
            />
            <SendButton onClick={handleSendMessage} disabled={inputValue.trim() === '' || isTyping}>
              ➤
            </SendButton>
          </ChatInput>
        </ChatWindow>
      )}
      
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '💬'}
      </ChatButton>
    </ChatContainer>
  );
};

export default Chat;

