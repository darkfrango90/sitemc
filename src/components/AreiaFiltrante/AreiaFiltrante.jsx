import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { FaWater } from 'react-icons/fa';
import { openWhatsApp, whatsappMessages } from '../../utils/whatsapp';

const AreiaFiltranteSection = styled.section`
  padding: 6rem 0 4rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  
  span {
    color: #2e7d32;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #333;
`;

const FeaturesList = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`;

const FeatureItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #2e7d32;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const AreiaFiltrante = () => {
  const handleOrcamento = () => {
    const message = whatsappMessages.areiaFiltrante();
    openWhatsApp(message);
  };

  return (
    <AreiaFiltranteSection id="areia-filtrante">
      <Container>
        <SectionTitle>Areia <span>Filtrante</span></SectionTitle>
        
        <ContentContainer>
          <TextContainer>
            <IconContainer>
              <FaWater />
            </IconContainer>
            <Description>
              Transforme a qualidade da sua água com a excelência das areias filtrantes da Mineração Cezar. Nossos produtos são cuidadosamente selecionados e tratados para oferecer uma filtragem superior, garantindo água cristalina e segura para diversas aplicações.
            </Description>
            <Description>
              Confie na Mineração Cezar para proporcionar o melhor em soluções de filtragem. Nossa areia filtrante é sinônimo de qualidade e desempenho, atendendo às necessidades de residências, indústrias e sistemas de abastecimento.
            </Description>
            
            <FeaturesList>
              <FeatureItem>Granulometria Precisa: Grãos uniformes que otimizam a retenção de impurezas, elevando a eficiência da filtragem</FeatureItem>
              <FeatureItem>Pureza Garantida: Livre de contaminantes, assegurando uma água limpa e saudável.</FeatureItem>
              <FeatureItem>Durabilidade Excepcional: Areia resistente que prolonga a vida útil do seu sistema de filtragem.</FeatureItem>
              <FeatureItem>Versatilidade de Uso: Ideal para piscinas, poços artesianos e estações de tratamento de água.</FeatureItem>
            </FeaturesList>
            
            <Button onClick={handleOrcamento}>Solicitar orçamento</Button>
          </TextContainer>
          
          <ImageContainer>
            <img src={require('../../assets/images/produto_areias_filtrantes.png')} alt="Areia Filtrante" />
          </ImageContainer>
        </ContentContainer>
      </Container>
    </AreiaFiltranteSection>
  );
};

export default AreiaFiltrante;
