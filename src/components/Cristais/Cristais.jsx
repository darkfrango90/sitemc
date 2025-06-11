import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { FaGem } from 'react-icons/fa';

const CristaisSection = styled.section`
  padding: 6rem 0 4rem;
  background-color: #fff;
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
  flex-direction: column;
  gap: 2rem;
`;

const ImageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  max-width: 600px;

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
  text-align: justify;
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

const Cristais = () => {
  return (
    <CristaisSection id="cristais">
      <Container>
        <SectionTitle>Cristais <span>Martelados</span></SectionTitle>

        <ContentContainer>
          <TextContainer>
            <IconContainer>
              <FaGem />
            </IconContainer>
            <Description>
              Oferecemos uma seleção exclusiva de cristais martelados de alta qualidade, cuidadosamente lapidados e energizados para emanar vibrações positivas e transformar seus ambientes.
            </Description>
            <Description>
              Nossos cristais martelados são perfeitos para decoração, ambientes de meditação e para quem busca harmonizar energias em espaços residenciais ou comerciais.
            </Description>
            <Description>
              O cristal de quartzo é uma pedra milenar conhecida por sua pureza e energia. Usado há séculos em diferentes culturas, acredita-se que o quartzo amplifica a energia, promove clareza mental e auxilia na cura emocional e espiritual.
            </Description>
            <Description>
              Espiritualmente, ele é considerado um poderoso aliado para meditação, equilíbrio dos chakras e proteção contra energias negativas. É uma pedra de luz que facilita a conexão com o eu interior e a intuição.
            </Description>
            <Description>
              Como item decorativo, o quartzo pode ser utilizado em salas, escritórios ou quartos, contribuindo para um ambiente mais harmônico, estético e energizado. Disponível em diversos tamanhos e lapidações, adapta-se perfeitamente a qualquer estilo de decoração.
            </Description>

            <FeaturesList>
              <FeatureItem>Cristais selecionados de alta qualidade</FeatureItem>
              <FeatureItem>Processo de lapidação artesanal</FeatureItem>
              <FeatureItem>Propriedades energéticas potencializadas</FeatureItem>
              <FeatureItem>Diversos tamanhos e formatos disponíveis</FeatureItem>
              <FeatureItem>Indicado para meditação e equilíbrio espiritual</FeatureItem>
              <FeatureItem>Ideal como item decorativo para harmonização de ambientes</FeatureItem>
            </FeaturesList>
          </TextContainer>

          <ImageButtonWrapper>
            <ImageContainer>
              <img src={require('../../assets/images/produto_cristais_martelado.png')} alt="Cristais Martelados" />
            </ImageContainer>
            <Button>Solicitar orçamento</Button>
          </ImageButtonWrapper>
        </ContentContainer>
      </Container>
    </CristaisSection>
  );
};

export default Cristais;
