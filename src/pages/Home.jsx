import React from 'react';
import Header from '../components/Header/Header';
import Diferenciais from '../components/Diferenciais/Diferenciais';
import Inovacao from '../components/Inovacao/Inovacao';
import ConstrucaoCivil from '../components/ConstrucaoCivil/ConstrucaoCivil';
import AreiaFiltrante from '../components/AreiaFiltrante/AreiaFiltrante';
import Cristais from '../components/Cristais/Cristais';
import AmbientesCristais from '../components/AmbientesCristais/AmbientesCristais';
import PorqueEscolher from '../components/PorqueEscolher/PorqueEscolher';
import Sobre from '../components/Sobre/Sobre';
import Historia from '../components/Historia/Historia';
import Depoimentos from '../components/Depoimentos/Depoimentos';
import Contato from '../components/Contato/Contato';
import Localizacao from '../components/Localizacao/Localizacao';
import Footer from '../components/Footer/Footer';

// Importando imagens
import bannerImage from '../assets/images/banner_principal.png';
import logoImage from '../assets/images/logo.png';

function Home() {
  return (
    <div>
      <div id="inicio">
        <Header backgroundImage={bannerImage} logoSrc={logoImage} />
      </div>
      <Diferenciais />
      <Inovacao />
      <ConstrucaoCivil />
      <AreiaFiltrante />
      <Cristais />
      <AmbientesCristais />
      <PorqueEscolher />
      <Sobre />
      <Historia />
      <Depoimentos />
      <Contato />
      <Localizacao />
      <Footer />
    </div>
  );
}

export default Home;

