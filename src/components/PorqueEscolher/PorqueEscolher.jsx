import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { FaHistory, FaTools, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

const PorqueEscolherSection = styled.section`
  padding: 4rem 0;
  background-color: #2e7d32;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: white;
  }
`;

const RazoesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const RazaoCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const RazaoIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const RazaoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const RazaoDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const PorqueEscolher = () => {
  const razoes = [
    {
      icon: <FaHistory />,
      title: 'Experiência e Tradição',
      description: 'Possuimos vasta experiência em todas as etapas da produção desde a extração até o beneficiamento dos minerais.'
    },
    {
      icon: <FaTools />,
      title: 'Soluções Completas',
      description: 'Oferecemos uma ampla gama de produtos minerais para atender às diversas necessidades dos nossos clientes.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Preços Competitivos',
      description: 'Oferecemos preços competitivos no mercado, sem comprometer a qualidade dos seus produtos e serviços.'
    },
    {
      icon: <FaTruck />,
      title: 'Entrega rápida e eficiente',
      description: 'Contamos com uma logística moderna e eficiente que garante que seus produtos cheguem no local desejado no prazo combinado.'
    }
  ];

  return (
    <PorqueEscolherSection id="porque-escolher">
      <Container>
        <SectionTitle>Porque escolher a mineração cezar?</SectionTitle>
        <RazoesGrid>
          {razoes.map((razao, index) => (
            <RazaoCard key={index}>
              <RazaoIcon>{razao.icon}</RazaoIcon>
              <RazaoTitle>{razao.title}</RazaoTitle>
              <RazaoDescription>{razao.description}</RazaoDescription>
            </RazaoCard>
          ))}
        </RazoesGrid>
      </Container>
    </PorqueEscolherSection>
  );
};

export default PorqueEscolher;
