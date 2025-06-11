import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Card from '../UI/Card';
import { FaLeaf, FaTools, FaHardHat } from 'react-icons/fa';

const DiferenciaisSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

const DiferenciaisTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const DiferencialCard = styled(Card)`
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #e0e0e0;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #2e7d32;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2e7d32;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: <FaLeaf />,
      title: 'Sustentabilidade',
      description: 'Extração consciente com responsabilidade ambiental.'
    },
    {
      icon: <FaTools />,
      title: 'Expertise Imbatível',
      description: 'Acumulamos um vasto conhecimento em todas as etapas da mineração, desde a prospecção até o beneficiamento.'
    },
    {
      icon: <FaHardHat />,
      title: 'Segurança',
      description: 'Implementamos rigorosos procedimentos de segurança em todas as nossas operações.'
    }
  ];

  return (
    <DiferenciaisSection>
      <Container>
        <CardsContainer>
          {diferenciais.map((diferencial, index) => (
            <DiferencialCard key={index}>
              <IconWrapper>{diferencial.icon}</IconWrapper>
              <CardTitle>{diferencial.title}</CardTitle>
              <CardDescription>{diferencial.description}</CardDescription>
            </DiferencialCard>
          ))}
        </CardsContainer>
      </Container>
    </DiferenciaisSection>
  );
};

export default Diferenciais;
