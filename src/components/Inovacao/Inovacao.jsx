import React from 'react';
import styled from 'styled-components';
import equipamentoExtracao1 from '../../assets/images/equipamento_extracao_1.jpg';
import equipamentoExtracao2 from '../../assets/images/equipamento_extracao_2.jpg';
import equipamentoExtracao3 from '../../assets/images/equipamento_extracao_3.jpg';
import equipamentoBeneficiamento1 from '../../assets/images/equipamento_beneficiamento_1.png';

const InovacaoContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
  
  span {
    color: #27ae60;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #6c757d;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const EquipmentCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const EquipmentImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const EquipmentContent = styled.div`
  padding: 25px;
`;

const EquipmentTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const EquipmentDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const VideoWrapper = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const VideoTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const VideoPlayer = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 450px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const TechHighlights = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const TechTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
`;

const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const TechItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const TechIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const TechContent = styled.div`
  flex: 1;
`;

const TechItemTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const TechItemDescription = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Inovacao = () => {
  const equipamentos = [
    {
      image: equipamentoExtracao1,
      title: "Sistema de Classificação Avançado",
      description: "Equipamentos de última geração para classificação de areias filtrantes, garantindo máxima eficiência na remoção de impurezas e uniformidade granulométrica."
    },
    {
      image: equipamentoExtracao2,
      title: "Hidrociclones",
      description: "Tecnologia moderna para separação dos sólidos dos líquidos, atravez da força centrífuga, fornecendo materiais dentro das normais da ABNT."
    },
    {
      image: equipamentoExtracao3,
      title: "Planta de Beneficiamento",
      description: "Instalações completas para processamento de areias de sílica, com equipamentos de separação, classificação e purificação de alta precisão."
    }
  ];

  const tecnologias = [
    {
      icon: "⚙️",
      title: "Automação Inteligente",
      description: "Sistemas automatizados de controle de processo que garantem qualidade constante e reduzem o impacto ambiental."
    },
    {
      icon: "🔬",
      title: "Análise Laboratorial",
      description: "Enviamos nossos produtos para analise com equipamentos de última geração para análise granulométrica e controle de qualidade."
    },
    {
      icon: "🌱",
      title: "Sustentabilidade",
      description: "Tecnologias limpas que minimizam o impacto ambiental e promovem a recuperação de áreas degradadas."
    },
    {
      icon: "📊",
      title: "Monitoramento Digital",
      description: "Sistemas de monitoramento em tempo real para otimização de processos e garantia de qualidade."
    }
  ];

  return (
    <InovacaoContainer id="inovacao">
      <Container>
        <Title>
          <span>Inovação</span> e Tecnologia
        </Title>
        <Subtitle>
          Na Mineração Cezar, investimos constantemente em tecnologia de ponta para oferecer 
          os melhores produtos em extração e beneficiamento de areias filtrantes. Nossos 
          equipamentos modernos garantem qualidade superior e sustentabilidade ambiental.
        </Subtitle>

        <EquipmentGrid>
          {equipamentos.map((equipamento, index) => (
            <EquipmentCard key={index}>
              <EquipmentImage src={equipamento.image} alt={equipamento.title} />
              <EquipmentContent>
                <EquipmentTitle>{equipamento.title}</EquipmentTitle>
                <EquipmentDescription>{equipamento.description}</EquipmentDescription>
              </EquipmentContent>
            </EquipmentCard>
          ))}
        </EquipmentGrid>

        <VideoWrapper>
          <VideoTitle>Somos referência em inovação</VideoTitle>
          <VideoPlayer 
            src="https://www.youtube.com/embed/cYZCoURE0WE" 
            title="Mineração Cezar desde 1990 Inovando com Tecnologia" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </VideoPlayer>
        </VideoWrapper>

        <TechHighlights>
          <TechTitle>Nossas Tecnologias</TechTitle>
          <TechList>
            {tecnologias.map((tech, index) => (
              <TechItem key={index}>
                <TechIcon>{tech.icon}</TechIcon>
                <TechContent>
                  <TechItemTitle>{tech.title}</TechItemTitle>
                  <TechItemDescription>{tech.description}</TechItemDescription>
                </TechContent>
              </TechItem>
            ))}
          </TechList>
        </TechHighlights>
      </Container>
    </InovacaoContainer>
  );
};

export default Inovacao;