import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigir o problema dos ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocalizacaoSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const EnderecoContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Endereco = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Localizacao = () => {
  // Coordenadas aproximadas de Palmas-TO
  const position = [-10.153492124260133, -48.357351511446865];

  return (
    <LocalizacaoSection id="localizacao">
      <Container>
        <SectionTitle>Onde estamos</SectionTitle>
        <MapWrapper>
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Mineração Cezar <br /> Gleba 3, Lote 4, s/n, Loteamento Área Verde, Palmas - TO
              </Popup>
            </Marker>
          </MapContainer>
        </MapWrapper>
        <EnderecoContainer>
          <Endereco>
            Gleba 3, Lote 4, s/n<br />
            Loteamento Área Verde, Palmas - TO
          </Endereco>
          <Button>COMO CHEGAR</Button>
        </EnderecoContainer>
      </Container>
    </LocalizacaoSection>
  );
};

export default Localizacao;
