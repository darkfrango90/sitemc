import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/navbar.css';
import './styles/pages.css';
import Navbar from './components/Navbar/Navbar';
import Calculadora from './components/Calculadora/Calculadora';
import Chat from './components/Chat/Chat';
import Home from './pages/Home';
import CatalogoPage from './pages/CatalogoPage';
import PedidosPage from './pages/PedidosPage';
import AdminPage from './pages/AdminPage';

// Importando imagens
import logoImage from './assets/images/logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar logoSrc={logoImage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/pedidos" element={<PedidosPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        
        {/* Componentes que aparecem em todas as páginas */}
        <div id="calculadora">
          <Calculadora />
        </div>
        <Chat />
      </div>
    </Router>
  );
}

export default App;
