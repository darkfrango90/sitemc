import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';

const HeaderSection = styled.header`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 450px;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 70px; /* Compensar altura do navbar fixo */
  
  @media (max-width: 768px) {
    height: 500px; /* Aumentar altura no mobile para acomodar o padding-top */
    padding-top: 80px; /* Mais espaço no mobile */
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
    z-index: 1;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

const Logo = styled.img`
  max-width: 300px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Header = ({ backgroundImage, logoSrc }) => {
  return (
    <HeaderSection backgroundImage={backgroundImage}>
      <Container>
        <HeaderContent>
          <Title>Areia Filtrante de Alta Qualidade para Piscinas, Poços Artesianos e Saneamento</Title>
          <Subtitle>fornecendo soluções em filtragem com areias e seixos de alto teor de quartzo.</Subtitle>
        </HeaderContent>
      </Container>
    </HeaderSection>
  );
};

export default Header;
