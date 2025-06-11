import React from 'react';
import Pedidos from '../components/Pedidos/Pedidos';
import Footer from '../components/Footer/Footer';

function PedidosPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Sistema de Pedidos Online</h1>
        <p className="page-description">
          Faça seus pedidos de forma rápida e prática. Selecione os produtos, 
          informe as quantidades e complete seus dados para receber um orçamento personalizado.
        </p>
        <Pedidos />
      </div>
      <Footer />
    </div>
  );
}

export default PedidosPage;

