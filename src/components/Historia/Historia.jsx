import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { FaCalendarAlt, FaUsers, FaUserTie } from 'react-icons/fa';

const HistoriaSection = styled.section`
  padding: 4rem 0;
  background-color: #f5f5f5;
`;

const HistoriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HistoriaContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

const HistoriaImage = styled.div`
  flex: 1;
  min-width: 300px;
  height: 400px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2e7d32;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #333;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  flex: 1;
  min-width: 120px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 0.5rem;
`;

const Historia = () => {
  return (
    <HistoriaSection id="historia">
      <Container>
        <HistoriaContainer>
          <HistoriaContent>
            <Title>Desde 1990</Title>
            <Description>
              Estamos presente nas principais obras do estado, empresa referência na produção de areia, seixo e areia filtrante.
              Nossos produtos são usados para construção, acabamento e paisagismo.
            </Description>
            <Description>
              Fazemos parte da contrução das principais praias de Palmas-TO.
              Somos referência no fornecimento de areia filtrante para empresas de tratamento de água do Tocantins.
            </Description>
            
            <StatsContainer>
              <StatItem>
                <StatIcon><FaCalendarAlt /></StatIcon>
                <StatNumber>+34</StatNumber>
                <StatLabel>Anos no mercado</StatLabel>
              </StatItem>
              <StatItem>
                <StatIcon><FaUsers /></StatIcon>
                <StatNumber>+10.000</StatNumber>
                <StatLabel>Clientes satisfeitos</StatLabel>
              </StatItem>
              <StatItem>
                <StatIcon><FaUserTie /></StatIcon>
                <StatNumber>+500</StatNumber>
                <StatLabel>Profissionais</StatLabel>
              </StatItem>
            </StatsContainer>
          </HistoriaContent>
          <HistoriaImage image={require('../../assets/images/banner_principal.png')} />
        </HistoriaContainer>
      </Container>
    </HistoriaSection>
  );
};

export default Historia;
