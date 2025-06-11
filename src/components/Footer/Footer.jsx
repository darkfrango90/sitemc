import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Button from '../UI/Button';

const FooterSection = styled.footer`
  background-color: #000;
  color: white;
  padding: 3rem 0;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 1rem;
  color: #2e7d32;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2e7d32;
  }
`;

const ContactButton = styled(Button)`
  margin-top: 1rem;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #777;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <FooterColumn>
            <FooterTitle>Contato:</FooterTitle>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <strong>Nosso e-mail</strong><br />
                vgcezar@yahoo.com.br
              </ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <strong>Numero</strong><br />
                63 99973-7479
              </ContactText>
            </ContactItem>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Nossas redes:</FooterTitle>
            <SocialLinks>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
            <ContactButton>Entrar em contato</ContactButton>
          </FooterColumn>
        </FooterContainer>
        
        <Copyright>
          © {new Date().getFullYear()} Mineração Cezar. Todos os direitos reservados.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
