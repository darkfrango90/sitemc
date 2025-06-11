import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import ambienteExoterico from '../../assets/images/ambiente_exoterico.svg';
import ambientePaisagismo from '../../assets/images/ambiente_paisagismo.svg';

const Section = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const EnvironmentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const EnvCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1;
  min-width: 280px;
  max-width: 450px;
`;

const EnvImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;

const BenefitsList = styled.ul`
  margin-top: 2rem;
  list-style: disc inside;
`;

const BenefitItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-align: justify;
`;

const AmbientesCristais = () => (
  <Section id="ambientes">
    <Container>
      <Title>Ambientes com Cristais</Title>
      <EnvironmentsWrapper>
        <EnvCard>
          <EnvImage src={ambienteExoterico} alt="Ambiente exot\u00e9rico" />
          <Description>
            Espa\u00e7os exot\u00e9ricos utilizam cristais para potencializar pr\u00e1ticas espirituais, favorecendo a medita\u00e7\u00e3o e a purifica\u00e7\u00e3o de energias.
          </Description>
        </EnvCard>
        <EnvCard>
          <EnvImage src={ambientePaisagismo} alt="Paisagismo com cristais" />
          <Description>
            No paisagismo, os cristais embelezam jardins e canteiros, trazendo harmonia e conex\u00e3o com a natureza ao ambiente.
          </Description>
        </EnvCard>
      </EnvironmentsWrapper>
      <BenefitsList>
        <BenefitItem>Purifica e protege a energia do local.</BenefitItem>
        <BenefitItem>Auxilia na medita\u00e7\u00e3o e na eleva\u00e7\u00e3o espiritual.</BenefitItem>
        <BenefitItem>Equilibra os chakras e fortalece a intui\u00e7\u00e3o.</BenefitItem>
        <BenefitItem>Intensifica a sensa\u00e7\u00e3o de bem-estar em ambientes internos e externos.</BenefitItem>
      </BenefitsList>
    </Container>
  </Section>
);

export default AmbientesCristais;
