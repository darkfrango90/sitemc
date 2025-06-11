import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { FaHistory, FaUsers, FaUserTie, FaBuilding } from 'react-icons/fa';

const SobreSection = styled.section`
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
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
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

const TimelineContainer = styled.div`
  margin-top: 4rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #2e7d32;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => (props.position === 'left' ? '0' : '50%')};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TimelineDate = styled.div`
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 0.5rem;
`;

const TimelineText = styled.p`
  margin: 0;
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #2e7d32;
  border-radius: 50%;
  top: 15px;
  right: ${props => (props.position === 'left' ? '-10px' : 'auto')};
  left: ${props => (props.position === 'right' ? '-10px' : 'auto')};
  
  @media (max-width: 768px) {
    left: 21px;
    right: auto;
  }
`;

const Sobre = () => {
  const timelineEvents = [
    {
      date: '1990',
      text: 'Fundação da Mineração Cezar em Palmas, Tocantins.',
      position: 'left'
    },
    {
      date: '2000',
      text: 'Expansão das operações e aquisição de novos equipamentos.',
      position: 'right'
    },
    {
      date: '2010',
      text: 'Início da produção de areias filtrantes para tratamento de água.',
      position: 'left'
    },
    {
      date: '2015',
      text: 'Participação nas principais obras de infraestrutura do estado.',
      position: 'right'
    },
    {
      date: '2020',
      text: 'Modernização dos processos e foco em sustentabilidade ambiental.',
      position: 'left'
    }
  ];

  return (
    <SobreSection id="sobre">
      <Container>
        <SectionTitle>Sobre <span>Nós</span></SectionTitle>
        
        <ContentContainer>
          <TextContainer>
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
                <StatIcon><FaHistory /></StatIcon>
                <StatNumber>+34</StatNumber>
                <StatLabel>Anos no mercado</StatLabel>
              </StatItem>
              <StatItem>
                <StatIcon><FaUsers /></StatIcon>
                <StatNumber>+10000</StatNumber>
                <StatLabel>Clientes satisfeitos</StatLabel>
              </StatItem>
              <StatItem>
                <StatIcon><FaUserTie /></StatIcon>
                <StatNumber>+500</StatNumber>
                <StatLabel>Profissionais</StatLabel>
              </StatItem>
            </StatsContainer>
          </TextContainer>
          
          <ImageContainer>
            <img src={require('../../assets/images/banner_principal.png')} alt="Mineração Cezar" />
          </ImageContainer>
        </ContentContainer>
        
        <TimelineContainer>
          <TimelineTitle>Nossa História</TimelineTitle>
          <Timeline>
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} position={event.position}>
                <TimelineContent>
                  <TimelineDate>{event.date}</TimelineDate>
                  <TimelineText>{event.text}</TimelineText>
                </TimelineContent>
                <TimelineDot position={event.position} />
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineContainer>
      </Container>
    </SobreSection>
  );
};

export default Sobre;
