import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { FaBuilding } from 'react-icons/fa';
import { openWhatsApp, whatsappMessages } from '../../utils/whatsapp';

const ConstrucaoCivilSection = styled.section`
  padding: 6rem 0 4rem;
  background-color: #f5f5f5;
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;
`;

const IntroText = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const IntroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #2e7d32;
  margin-bottom: 1rem;
  text-align: center;
`;

const ConstrucaoCivil = () => {
  const produtos = [
    {
      title: 'Areias',
      description: 'Nossas areias lavadas são cuidadosamente beneficiadas e selecionadas para garantir a granulometria ideal, a pureza e a resistência exigidas em cada projeto.',
      image: require('../../assets/images/produto_areia.png')
    },
    {
      title: 'Seixos Rolado',
      description: 'Nossos seixos rolados são perfeitos para diversos projetos de paisagismo, construção civil e decoração, agregando beleza natural, funcionalidade e um toque único aos seus ambientes.',
      image: require('../../assets/images/produto_seixos_rolado.png')
    },
    {
      title: 'Seixo Britado',
      description: 'Oferecemos uma ampla variedade de seixos britados de alta qualidade para atender as suas necessidades de construção civil, pavimentação de ruas, calçadas, áreas de lazer e diversos outros projetos.',
      image: require('../../assets/images/produto_seixo_britado.png')
    }
  ];

  const handleOrcamento = (produtoNome) => {
    const message = whatsappMessages.orcamento(produtoNome);
    openWhatsApp(message);
  };

  return (
    <ConstrucaoCivilSection id="construcao-civil">
      <Container>
        <SectionTitle>Construção <span>Civil</span></SectionTitle>
        
        <IntroText>
          <IconContainer>
            <FaBuilding />
          </IconContainer>
          <IntroDescription>
            A Mineração Cezar oferece uma linha completa de produtos para construção civil, com qualidade superior e preços competitivos. Nossos materiais são utilizados nas principais obras do estado, garantindo durabilidade e excelente acabamento.
          </IntroDescription>
        </IntroText>
        
        <ProductsGrid>
          {produtos.map((produto, index) => (
            <ProductCard key={index}>
              <ProductImage image={produto.image} />
              <ProductContent>
                <ProductTitle>{produto.title}</ProductTitle>
                <ProductDescription>{produto.description}</ProductDescription>
                <Button onClick={() => handleOrcamento(produto.title)}>Solicitar orçamento</Button>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </ConstrucaoCivilSection>
  );
};

export default ConstrucaoCivil;
