import React, { useState } from 'react';
import styled from 'styled-components';

const AdminContainer = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
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

const LoginForm = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const LoginButton = styled.button`
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
`;

const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
`;

const MenuLink = styled.button`
  width: 100%;
  text-align: left;
  background: ${props => props.active ? '#27ae60' : 'transparent'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  border: none;
  padding: 12px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    background: ${props => props.active ? '#27ae60' : '#f8f9fa'};
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContentTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 25px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #e9ecef;
  font-weight: 600;
  color: #2c3e50;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e9ecef;
  color: #495057;
`;

const TableRow = styled.tr`
  &:hover {
    background: #f8f9fa;
  }
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    switch(props.status) {
      case 'novo': return '#e3f2fd';
      case 'processando': return '#fff3e0';
      case 'concluido': return '#e8f5e8';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'novo': return '#1976d2';
      case 'processando': return '#f57c00';
      case 'concluido': return '#388e3c';
      default: return '#666';
    }
  }};
`;

const LogoutButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 20px;
  width: 100%;
  
  &:hover {
    background: #c82333;
  }
`;

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  // Dados simulados para demonstração
  const mockData = {
    stats: {
      pedidos: 47,
      mensagens: 23,
      visitantes: 1250,
      vendas: 89500
    },
    pedidos: [
      { id: 1, cliente: 'João Silva', produto: 'Areia Filtrante', quantidade: '5 m³', valor: 'R$ 600,00', status: 'novo', data: '03/06/2025' },
      { id: 2, cliente: 'Maria Santos', produto: 'Seixo Britado', quantidade: '10 m³', valor: 'R$ 650,00', status: 'processando', data: '02/06/2025' },
      { id: 3, cliente: 'Pedro Costa', produto: 'Cristais Martelado', quantidade: '2 kg', valor: 'R$ 560,00', status: 'concluido', data: '01/06/2025' },
      { id: 4, cliente: 'Ana Oliveira', produto: 'Areia Construção', quantidade: '8 m³', valor: 'R$ 360,00', status: 'novo', data: '03/06/2025' },
    ],
    mensagens: [
      { id: 1, nome: 'Carlos Ferreira', email: 'carlos@email.com', assunto: 'Orçamento Areia', mensagem: 'Gostaria de um orçamento para 15m³ de areia filtrante', data: '03/06/2025 14:30' },
      { id: 2, nome: 'Lucia Mendes', email: 'lucia@email.com', assunto: 'Prazo de Entrega', mensagem: 'Qual o prazo para entrega de seixo rolado?', data: '03/06/2025 11:15' },
      { id: 3, nome: 'Roberto Lima', email: 'roberto@email.com', assunto: 'Especificações Técnicas', mensagem: 'Preciso das especificações da areia filtrante para piscina', data: '02/06/2025 16:45' },
    ],
    chatMessages: [
      { id: 1, usuario: 'Visitante #1234', mensagem: 'Preços dos produtos', resposta: 'Informações de preços enviadas', data: '03/06/2025 15:20' },
      { id: 2, usuario: 'Visitante #1235', mensagem: 'Entrega e frete', resposta: 'Informações de entrega enviadas', data: '03/06/2025 14:55' },
      { id: 3, usuario: 'Visitante #1236', mensagem: 'Orçamento personalizado', resposta: 'Direcionado para sistema de pedidos', data: '03/06/2025 13:30' },
    ]
  };

  const handleLogin = () => {
    // Simulação de login simples
    if (loginData.username === 'admin' && loginData.password === 'cezar123') {
      setIsLoggedIn(true);
    } else {
      alert('Usuário ou senha incorretos. Use: admin / cezar123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
    setActiveMenu('dashboard');
  };

  const renderDashboard = () => (
    <>
      <ContentTitle>Dashboard</ContentTitle>
      <StatsGrid>
        <StatCard>
          <StatNumber>{mockData.stats.pedidos}</StatNumber>
          <StatLabel>Pedidos Este Mês</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{mockData.stats.mensagens}</StatNumber>
          <StatLabel>Mensagens Recebidas</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{mockData.stats.visitantes}</StatNumber>
          <StatLabel>Visitantes Únicos</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>R$ {mockData.stats.vendas.toLocaleString()}</StatNumber>
          <StatLabel>Vendas Este Mês</StatLabel>
        </StatCard>
      </StatsGrid>
      
      <ContentTitle>Últimos Pedidos</ContentTitle>
      <Table>
        <thead>
          <tr>
            <TableHeader>Cliente</TableHeader>
            <TableHeader>Produto</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Data</TableHeader>
          </tr>
        </thead>
        <tbody>
          {mockData.pedidos.slice(0, 3).map(pedido => (
            <TableRow key={pedido.id}>
              <TableCell>{pedido.cliente}</TableCell>
              <TableCell>{pedido.produto}</TableCell>
              <TableCell>{pedido.valor}</TableCell>
              <TableCell><StatusBadge status={pedido.status}>{pedido.status}</StatusBadge></TableCell>
              <TableCell>{pedido.data}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );

  const renderPedidos = () => (
    <>
      <ContentTitle>Gerenciar Pedidos</ContentTitle>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Cliente</TableHeader>
            <TableHeader>Produto</TableHeader>
            <TableHeader>Quantidade</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Data</TableHeader>
          </tr>
        </thead>
        <tbody>
          {mockData.pedidos.map(pedido => (
            <TableRow key={pedido.id}>
              <TableCell>#{pedido.id}</TableCell>
              <TableCell>{pedido.cliente}</TableCell>
              <TableCell>{pedido.produto}</TableCell>
              <TableCell>{pedido.quantidade}</TableCell>
              <TableCell>{pedido.valor}</TableCell>
              <TableCell><StatusBadge status={pedido.status}>{pedido.status}</StatusBadge></TableCell>
              <TableCell>{pedido.data}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );

  const renderMensagens = () => (
    <>
      <ContentTitle>Mensagens de Contato</ContentTitle>
      <Table>
        <thead>
          <tr>
            <TableHeader>Nome</TableHeader>
            <TableHeader>E-mail</TableHeader>
            <TableHeader>Assunto</TableHeader>
            <TableHeader>Mensagem</TableHeader>
            <TableHeader>Data</TableHeader>
          </tr>
        </thead>
        <tbody>
          {mockData.mensagens.map(mensagem => (
            <TableRow key={mensagem.id}>
              <TableCell>{mensagem.nome}</TableCell>
              <TableCell>{mensagem.email}</TableCell>
              <TableCell>{mensagem.assunto}</TableCell>
              <TableCell>{mensagem.mensagem.substring(0, 50)}...</TableCell>
              <TableCell>{mensagem.data}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );

  const renderChat = () => (
    <>
      <ContentTitle>Conversas do Chat</ContentTitle>
      <Table>
        <thead>
          <tr>
            <TableHeader>Usuário</TableHeader>
            <TableHeader>Mensagem</TableHeader>
            <TableHeader>Resposta</TableHeader>
            <TableHeader>Data</TableHeader>
          </tr>
        </thead>
        <tbody>
          {mockData.chatMessages.map(chat => (
            <TableRow key={chat.id}>
              <TableCell>{chat.usuario}</TableCell>
              <TableCell>{chat.mensagem}</TableCell>
              <TableCell>{chat.resposta}</TableCell>
              <TableCell>{chat.data}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );

  if (!isLoggedIn) {
    return (
      <AdminContainer id="admin">
        <Container>
          <Title>
            <span>Área</span> Administrativa
          </Title>
          <Subtitle>
            Acesse o painel administrativo para gerenciar pedidos, mensagens e conteúdo do site.
          </Subtitle>
          
          <LoginForm>
            <FormGroup>
              <Label>Usuário</Label>
              <Input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                placeholder="Digite seu usuário"
              />
            </FormGroup>
            <FormGroup>
              <Label>Senha</Label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="Digite sua senha"
              />
            </FormGroup>
            <LoginButton onClick={handleLogin}>
              Entrar
            </LoginButton>
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#6c757d', fontSize: '0.9rem' }}>
              Demo: admin / cezar123
            </p>
          </LoginForm>
        </Container>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer id="admin">
      <Container>
        <Title>
          <span>Painel</span> Administrativo
        </Title>
        
        <DashboardLayout>
          <Sidebar>
            <SidebarTitle>Menu</SidebarTitle>
            <MenuList>
              <MenuItem>
                <MenuLink 
                  active={activeMenu === 'dashboard'}
                  onClick={() => setActiveMenu('dashboard')}
                >
                  📊 Dashboard
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink 
                  active={activeMenu === 'pedidos'}
                  onClick={() => setActiveMenu('pedidos')}
                >
                  📦 Pedidos
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink 
                  active={activeMenu === 'mensagens'}
                  onClick={() => setActiveMenu('mensagens')}
                >
                  📧 Mensagens
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink 
                  active={activeMenu === 'chat'}
                  onClick={() => setActiveMenu('chat')}
                >
                  💬 Chat
                </MenuLink>
              </MenuItem>
            </MenuList>
            <LogoutButton onClick={handleLogout}>
              Sair
            </LogoutButton>
          </Sidebar>

          <MainContent>
            {activeMenu === 'dashboard' && renderDashboard()}
            {activeMenu === 'pedidos' && renderPedidos()}
            {activeMenu === 'mensagens' && renderMensagens()}
            {activeMenu === 'chat' && renderChat()}
          </MainContent>
        </DashboardLayout>
      </Container>
    </AdminContainer>
  );
};

export default Admin;

