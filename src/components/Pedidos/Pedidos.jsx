import React, { useState } from 'react';
import styled from 'styled-components';
import produtoAreia from '../../assets/images/produto_areia.png';
import produtoAreiaFiltrante from '../../assets/images/produto_areias_filtrantes.png';
import produtoCristais from '../../assets/images/produto_cristais_martelado.png';
import produtoSeixoBritado from '../../assets/images/produto_seixo_britado.png';
import produtoSeixoRolado from '../../assets/images/produto_seixos_rolado.png';

const PedidosContainer = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
`;

const Title = styled.h1`
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
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const PedidoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 350px;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ProdutosSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 25px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 15px;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: #27ae60;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const QuantityInput = styled.input`
  width: 80px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  min-width: 60px;
`;

const AddButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #219a52;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const CarrinhoSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    position: static;
    padding: 20px;
  }
`;

const CarrinhoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
  flex-wrap: wrap;
  gap: 10px;
`;

const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemName = styled.p`
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  word-wrap: break-word;
`;

const ItemDetails = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
  word-wrap: break-word;
`;

const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #27ae60;
`;

const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TotalLabel = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

const TotalValue = styled.span`
  font-weight: bold;
  color: ${props => props.final ? '#27ae60' : '#6c757d'};
  font-size: ${props => props.final ? '1.2rem' : '1rem'};
`;

const FormSection = styled.div`
  margin-top: 30px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 80px;
  grid-column: 1 / -1;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const FinalizarButton = styled.button`
  width: 100%;
  background: #27ae60;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #219a52;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  color: #6c757d;
  padding: 40px 0;
`;

const Pedidos = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidades, setQuantidades] = useState({});
  const [dadosCliente, setDadosCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    endereco: '',
    cidade: '',
    observacoes: ''
  });

  const produtos = [
    {
      id: 1,
      nome: "Areia Filtrante Premium",
      preco: 1.00,
      unidade: "Kg",
      imagem: produtoAreiaFiltrante
    },
    {
      id: 2,
      nome: "Areia Fina Lavada",
      preco: 72.00,
      unidade: "m³",
      imagem: produtoAreia
    },
    {
      id: 3,
      nome: "Areia Média Lavada",
      preco: 72.00,
      unidade: "m³",
      imagem: produtoAreia
    },
    {
      id: 4,
      nome: "Areia Grossa Lavada",
      preco: 72.00,
      unidade: "m³",
      imagem: produtoAreia
    },
    {
      id: 5,
      nome: "Seixo Britado",
      preco: 158.00,
      unidade: "m³",
      imagem: produtoSeixoBritado
    },
    {
      id: 6,
      nome: "Seixo Rolado Natural",
      preco: 127.00,
      unidade: "m³",
      imagem: produtoSeixoRolado
    },
    {
      id: 7,
      nome: "Cristais de Quartzo Martelado",
      preco: 17.00,
      unidade: "kg",
      imagem: produtoCristais
    }
  ];

  const adicionarAoCarrinho = (produto) => {
    const quantidade = quantidades[produto.id] || 1;
    const itemExistente = carrinho.find(item => item.id === produto.id);
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item => 
        item.id === produto.id 
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade }]);
    }
    
    setQuantidades({ ...quantidades, [produto.id]: 1 });
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(carrinho.filter(item => item.id !== produtoId));
  };

  const calcularSubtotal = () => {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  const calcularFrete = () => {
    const subtotal = calcularSubtotal();
    return subtotal > 500 ? 0 : 500; // Frete grátis acima de R$ 500
  };

  const calcularTotal = () => {
    return calcularSubtotal() + calcularFrete();
  };

  const handleInputChange = (field, value) => {
    setDadosCliente({ ...dadosCliente, [field]: value });
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      alert('Adicione produtos ao carrinho antes de finalizar o pedido.');
      return;
    }

    if (!dadosCliente.nome || !dadosCliente.email || !dadosCliente.telefone) {
      alert('Preencha os campos obrigatórios: Nome, E-mail e Telefone.');
      return;
    }

    // Aqui você pode integrar com um sistema de backend ou enviar por email
    const pedido = {
      cliente: dadosCliente,
      itens: carrinho,
      subtotal: calcularSubtotal(),
      frete: calcularFrete(),
      total: calcularTotal(),
      data: new Date().toISOString()
    };

    console.log('Pedido finalizado:', pedido);
    alert('Pedido enviado com sucesso! Entraremos em contato em breve.');
    
    // Limpar carrinho e formulário
    setCarrinho([]);
    setDadosCliente({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      endereco: '',
      cidade: '',
      observacoes: ''
    });
  };

  return (
    <PedidosContainer id="pedidos">
      <Container>
        <Title>
          <span>Sistema</span> de Pedidos
        </Title>
        <Subtitle>
          Faça seu pedido online de forma rápida e segura. Selecione os produtos, 
          informe seus dados e receba um orçamento personalizado.
        </Subtitle>

        <PedidoLayout>
          <ProdutosSection>
            <SectionTitle>Nossos Produtos</SectionTitle>
            <ProductGrid>
              {produtos.map(produto => (
                <ProductCard key={produto.id}>
                  <ProductImage src={produto.imagem} alt={produto.nome} />
                  <ProductName>{produto.nome}</ProductName>
                  <ProductPrice>R$ {produto.preco.toFixed(2)}/{produto.unidade}</ProductPrice>
                  <QuantityContainer>
                    <span>Qtd:</span>
                    <QuantityInput
                      type="number"
                      min="1"
                      value={quantidades[produto.id] || 1}
                      onChange={(e) => setQuantidades({
                        ...quantidades,
                        [produto.id]: parseInt(e.target.value) || 1
                      })}
                    />
                    <span>{produto.unidade}</span>
                  </QuantityContainer>
                  <AddButton onClick={() => adicionarAoCarrinho(produto)}>
                    Adicionar ao Carrinho
                  </AddButton>
                </ProductCard>
              ))}
            </ProductGrid>
          </ProdutosSection>

          <CarrinhoSection>
            <SectionTitle>Carrinho de Compras</SectionTitle>
            
            {carrinho.length === 0 ? (
              <EmptyCart>
                <p>Seu carrinho está vazio</p>
                <p>Adicione produtos para continuar</p>
              </EmptyCart>
            ) : (
              <>
                {carrinho.map(item => (
                  <CarrinhoItem key={item.id}>
                    <ItemInfo>
                      <ItemName>{item.nome}</ItemName>
                      <ItemDetails>
                        {item.quantidade} {item.unidade} × R$ {item.preco.toFixed(2)}
                      </ItemDetails>
                    </ItemInfo>
                    <div>
                      <p style={{ margin: 0, fontWeight: 'bold', color: '#27ae60' }}>
                        R$ {(item.preco * item.quantidade).toFixed(2)}
                      </p>
                      <RemoveButton onClick={() => removerDoCarrinho(item.id)}>
                        Remover
                      </RemoveButton>
                    </div>
                  </CarrinhoItem>
                ))}

                <TotalContainer>
                  <TotalItem>
                    <TotalLabel>Subtotal:</TotalLabel>
                    <TotalValue>R$ {calcularSubtotal().toFixed(2)}</TotalValue>
                  </TotalItem>
                  <TotalItem>
                    <TotalLabel>Frete:</TotalLabel>
                    <TotalValue>
                      {calcularFrete() === 0 ? 'A Combinar' : `R$ ${calcularFrete().toFixed(2)}`}
                    </TotalValue>
                  </TotalItem>
                  <TotalItem>
                    <TotalLabel>Total:</TotalLabel>
                    <TotalValue final>R$ {calcularTotal().toFixed(2)}</TotalValue>
                  </TotalItem>
                </TotalContainer>
              </>
            )}

            <FormSection>
              <SectionTitle>Dados do Cliente</SectionTitle>
              <FormGrid>
                <FormInput
                  type="text"
                  placeholder="Nome *"
                  value={dadosCliente.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                />
                <FormInput
                  type="email"
                  placeholder="E-mail *"
                  value={dadosCliente.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <FormInput
                  type="tel"
                  placeholder="Telefone *"
                  value={dadosCliente.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                />
                <FormInput
                  type="text"
                  placeholder="Empresa"
                  value={dadosCliente.empresa}
                  onChange={(e) => handleInputChange('empresa', e.target.value)}
                />
                <FormInput
                  type="text"
                  placeholder="Endereço"
                  value={dadosCliente.endereco}
                  onChange={(e) => handleInputChange('endereco', e.target.value)}
                />
                <FormInput
                  type="text"
                  placeholder="Cidade"
                  value={dadosCliente.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                />
                <FormTextarea
                  placeholder="Observações"
                  value={dadosCliente.observacoes}
                  onChange={(e) => handleInputChange('observacoes', e.target.value)}
                />
              </FormGrid>
              
              <FinalizarButton 
                onClick={finalizarPedido}
                disabled={carrinho.length === 0}
              >
                Finalizar Pedido
              </FinalizarButton>
            </FormSection>
          </CarrinhoSection>
        </PedidoLayout>
      </Container>
    </PedidosContainer>
  );
};

export default Pedidos;

