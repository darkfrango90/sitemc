// Utilitário para gerar URLs do WhatsApp
export const generateWhatsAppURL = (message, phoneNumber = '563999737479') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

// Mensagens padrão para diferentes tipos de solicitação
export const whatsappMessages = {
  orcamento: (produto = 'materiais') => 
    `Olá! Gostaria de solicitar um orçamento para ${produto}. Poderia me ajudar com informações sobre preços e disponibilidade?`,
  
  orcamentoCalculadora: (tipo, volume, custo) =>
    `Olá! Usei a calculadora do site e preciso de um orçamento para:\n\n` +
    `Tipo: ${tipo}\n` +
    `Volume estimado: ${volume} m³\n` +
    `Valor estimado: R$ ${custo}\n\n` +
    `Poderia me enviar um orçamento detalhado?`,
  
  contato: (nome = '', email = '', assunto = 'Informações') =>
    `Olá! Meu nome é ${nome}${email ? ` (${email})` : ''}.\n\n` +
    `Gostaria de obter informações sobre ${assunto}. Poderia me ajudar?`,
  
  areiaFiltrante: () =>
    `Olá! Tenho interesse em areia filtrante para piscinas/poços artesianos. ` +
    `Poderia me enviar informações sobre especificações técnicas e preços?`,
  
  construcaoCivil: () =>
    `Olá! Preciso de materiais para construção civil (areia, seixos). ` +
    `Poderia me ajudar com um orçamento?`,
  
  cristais: () =>
    `Olá! Tenho interesse em cristais de quartzo. ` +
    `Poderia me enviar informações sobre produtos disponíveis e preços?`,
  
  catalogo: (produto) =>
    `Olá! Vi o produto "${produto}" no catálogo do site. ` +
    `Gostaria de mais informações e orçamento. Poderia me ajudar?`
};

// Função para abrir WhatsApp
export const openWhatsApp = (message, phoneNumber = '5563999737479') => {
  const url = generateWhatsAppURL(message, phoneNumber);
  window.open(url, '_blank');
};

