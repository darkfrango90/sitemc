import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { openWhatsApp, whatsappMessages } from '../../utils/whatsapp';

const ContatoSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

const ContatoTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2e7d32;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2e7d32;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
`;

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.nome}${formData.email ? ` (${formData.email})` : ''}.\n\n` +
                   `Assunto: ${formData.assunto || 'Contato via site'}\n\n` +
                   `Mensagem: ${formData.mensagem || 'Gostaria de mais informações sobre os produtos e serviços.'}\n\n` +
                   `Aguardo retorno. Obrigado!`;
    
    openWhatsApp(message);
  };

  return (
    <ContatoSection id="contato">
      <Container>
        <ContatoTitle>Fale conosco</ContatoTitle>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormInput 
                type="text" 
                name="nome"
                placeholder="Nome" 
                value={formData.nome}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                type="email" 
                name="email"
                placeholder="E-mail" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                type="text" 
                name="assunto"
                placeholder="Assunto" 
                value={formData.assunto}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <FormTextarea 
                name="mensagem"
                placeholder="Sua mensagem (opcional)" 
                value={formData.mensagem}
                onChange={handleInputChange}
              />
            </FormGroup>
            <SubmitButton type="submit">Enviar via WhatsApp</SubmitButton>
          </form>
        </FormContainer>
      </Container>
    </ContatoSection>
  );
};

export default Contato;
