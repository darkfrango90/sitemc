import React from 'react';
import Catalogo from '../components/Catalogo/Catalogo';
import Footer from '../components/Footer/Footer';

function CatalogoPage() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Catálogo de Produtos</h1>
        <p className="page-description">
          Conheça nossa linha completa de produtos com especificações técnicas detalhadas,
          aplicações e informações para sua obra ou projeto.
        </p>
        <Catalogo />
      </div>
      <Footer />
    </div>
  );
}

export default CatalogoPage;

