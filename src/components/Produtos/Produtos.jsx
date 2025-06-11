import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { FaTree, FaBuilding, FaWater } from 'react-icons/fa';

const ProdutosSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  
  span {
    color: #2e7d32;
  }
`;

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProdutoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProdutoImage = styled.div`
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProdutoContent = styled.div`
  padding: 1.5rem;
`;

const ProdutoIcon = styled.div`
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 1rem;
`;

const ProdutoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProdutoDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;
`;

const Produtos = () => {
  const produtos = [
    {
      icon: <FaTree />,
      title: 'Areias',
      description: 'Nossas areias lavadas são cuidadosamente beneficiadas e selecionadas para garantir a granulometria ideal, a pureza e a resistência exigidas em cada projeto.',
      image: require('../../assets/images/produto_areia.png')
    },
    {
      icon: <FaBuilding />,
      title: 'Seixos Rolado',
      description: 'Nossos seixos rolados são perfeitos para diversos projetos de paisagismo, construção civil e decoração, agregando beleza natural, funcionalidade e um toque único aos seus ambientes.',
      image: require('../../assets/images/produto_seixos_rolado.png')
    },
    {
      icon: <FaBuilding />,
      title: 'Seixo Britado',
      description: 'Oferecemos uma ampla variedade de seixos britados de alta qualidade para atender as suas necessidades de construção civil, pavimentação de ruas, calçadas, áreas de lazer e diversos outros projetos.',
      image: require('../../assets/images/produto_seixo_britado.png')
    },
    {
      icon: <FaBuilding />,
      title: 'Cristais Martelado',
      description: 'Oferecemos uma seleção exclusiva de cristais martelados de alta qualidade, cuidadosamente lapidados e energizados para emanar vibrações positivas e transformar seus ambientes.',
      image: require('../../assets/images/produto_cristais_martelado.png')
    },
    {
      icon: <FaWater />,
      title: 'Areias Filtrantes',
      description: 'Com as areias filtrantes da Mineração Cezar, você garante água cristalina, pura e segura para piscinas, consumo humano e processos industriais.',
      image: require('../../assets/images/produto_areias_filtrantes.png')
    }
  ];

  return (
    <ProdutosSection id="produtos">
      <Container>
        <SectionTitle>Nossos <span>Produtos</span></SectionTitle>
        <ProdutosGrid>
          {produtos.map((produto, index) => (
            <ProdutoCard key={index}>
              <ProdutoImage image={produto.image} />
              <ProdutoContent>
                <ProdutoIcon>{produto.icon}</ProdutoIcon>
                <ProdutoTitle>{produto.title}</ProdutoTitle>
                <ProdutoDescription>{produto.description}</ProdutoDescription>
                <Button>Fale conosco</Button>
              </ProdutoContent>
            </ProdutoCard>
          ))}
        </ProdutosGrid>
      </Container>
    </ProdutosSection>
  );
};

export default Produtos;
