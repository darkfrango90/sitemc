import React, { useState } from 'react';
import styled from 'styled-components';
import { openWhatsApp, whatsappMessages } from '../../utils/whatsapp';

const CalculadoraContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
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

const CalculatorTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border: 2px solid #27ae60;
  background: ${props => props.active ? '#27ae60' : 'white'};
  color: ${props => props.active ? 'white' : '#27ae60'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #27ae60;
    color: white;
  }
`;

const CalculatorCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const CalculatorTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #27ae60;
  }
`;

const CalculateButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background: #219a52;
  }
`;

const ResultsContainer = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-top: 30px;
  border-left: 5px solid #27ae60;
`;

const ResultTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResultLabel = styled.span`
  font-weight: 600;
  color: #495057;
`;

const ResultValue = styled.span`
  font-weight: bold;
  color: #27ae60;
  font-size: 1.1rem;
`;

const TipsContainer = styled.div`
  background: #e3f2fd;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const TipsTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 15px;
`;

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TipItem = styled.li`
  padding: 5px 0;
  color: #1565c0;
  
  &:before {
    content: "💡 ";
    margin-right: 8px;
  }
`;

const OrcamentoButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin: 20px auto 0;
  display: block;
  width: 100%;
  
  &:hover {
    background: #219a52;
  }
`;

const Calculadora = () => {
  const [abaAtiva, setAbaAtiva] = useState('construcao');
  const [resultados, setResultados] = useState(null);
  
  const handleOrcamentoCalculadora = () => {
    if (!resultados) return;
    
    let tipoMaterial = '';
    if (resultados.tipo === 'construcao') tipoMaterial = 'materiais para construção civil';
    else if (resultados.tipo === 'filtragem') tipoMaterial = 'areia filtrante';
    else if (resultados.tipo === 'paisagismo') tipoMaterial = 'seixos para paisagismo';
    
    const message = whatsappMessages.orcamentoCalculadora(
      tipoMaterial,
      resultados.volume,
      resultados.custo
    );
    openWhatsApp(message);
  };
  
  // Estados para diferentes calculadoras
  const [construcao, setConstrucao] = useState({
    comprimento: '',
    largura: '',
    espessura: '',
    tipoObra: 'concreto'
  });

  const [filtragem, setFiltragem] = useState({
    tipoFiltro: 'piscina',
    volumeAgua: '',
    vazao: ''
  });

  const [paisagismo, setPaisagismo] = useState({
    area: '',
    espessuraCamada: '',
    tipoAplicacao: 'decorativo'
  });

  const calcularConstrucao = () => {
    const volume = parseFloat(construcao.comprimento) * parseFloat(construcao.largura) * parseFloat(construcao.espessura);
    
    let fatorSeguranca = 1.1; // 10% de margem de segurança
    let densidadeAreia = 1.6; // ton/m³
    
    const volumeNecessario = volume * fatorSeguranca;
    const pesoAreia = volumeNecessario * densidadeAreia;
    const custoEstimado = volumeNecessario * 45; // R$ 45/m³ para areia de construção
    
    // Cálculo de cimento e outros materiais baseado no tipo de obra
    let cimento = 0;
    let brita = 0;
    
    if (construcao.tipoObra === 'concreto') {
      cimento = volumeNecessario * 350; // kg de cimento por m³
      brita = volumeNecessario * 0.8; // m³ de brita por m³ de concreto
    } else if (construcao.tipoObra === 'argamassa') {
      cimento = volumeNecessario * 200; // kg de cimento por m³
    }

    setResultados({
      tipo: 'construcao',
      volume: volumeNecessario.toFixed(2),
      peso: pesoAreia.toFixed(2),
      custo: custoEstimado.toFixed(2),
      cimento: cimento.toFixed(0),
      brita: brita.toFixed(2)
    });
  };

  const calcularFiltragem = () => {
    let volumeAreia = 0;
    const volume = parseFloat(filtragem.volumeAgua);
    
    if (filtragem.tipoFiltro === 'piscina') {
      volumeAreia = volume * 0.02; // 2% do volume da piscina
    } else if (filtragem.tipoFiltro === 'poco') {
      volumeAreia = volume * 0.15; // 15% para poços artesianos
    } else if (filtragem.tipoFiltro === 'eta') {
      volumeAreia = volume * 0.25; // 25% para estações de tratamento
    }
    
    const custoAreia = volumeAreia * 120; // R$ 120/m³ para areia filtrante
    const pesoAreia = volumeAreia * 2.65; // densidade da areia filtrante
    
    setResultados({
      tipo: 'filtragem',
      volume: volumeAreia.toFixed(2),
      peso: pesoAreia.toFixed(2),
      custo: custoAreia.toFixed(2),
      tipoFiltro: filtragem.tipoFiltro
    });
  };

  const calcularPaisagismo = () => {
    const area = parseFloat(paisagismo.area);
    const espessura = parseFloat(paisagismo.espessuraCamada) / 100; // converter cm para m
    
    const volumeSeixo = area * espessura;
    let custoUnitario = 85; // R$ 85/m³ para seixo rolado
    
    if (paisagismo.tipoAplicacao === 'drenagem') {
      custoUnitario = 65; // R$ 65/m³ para seixo britado
    }
    
    const custoTotal = volumeSeixo * custoUnitario;
    const pesoSeixo = volumeSeixo * 2.7; // densidade do seixo
    
    setResultados({
      tipo: 'paisagismo',
      volume: volumeSeixo.toFixed(2),
      peso: pesoSeixo.toFixed(2),
      custo: custoTotal.toFixed(2),
      aplicacao: paisagismo.tipoAplicacao
    });
  };

  const renderCalculadoraConstrucao = () => (
    <CalculatorCard>
      <CalculatorTitle>Calculadora para Construção Civil</CalculatorTitle>
      <FormGrid>
        <InputGroup>
          <Label>Comprimento (m)</Label>
          <Input
            type="number"
            step="0.1"
            value={construcao.comprimento}
            onChange={(e) => setConstrucao({...construcao, comprimento: e.target.value})}
            placeholder="Ex: 10.5"
          />
        </InputGroup>
        <InputGroup>
          <Label>Largura (m)</Label>
          <Input
            type="number"
            step="0.1"
            value={construcao.largura}
            onChange={(e) => setConstrucao({...construcao, largura: e.target.value})}
            placeholder="Ex: 8.0"
          />
        </InputGroup>
        <InputGroup>
          <Label>Espessura (m)</Label>
          <Input
            type="number"
            step="0.01"
            value={construcao.espessura}
            onChange={(e) => setConstrucao({...construcao, espessura: e.target.value})}
            placeholder="Ex: 0.10"
          />
        </InputGroup>
        <InputGroup>
          <Label>Tipo de Obra</Label>
          <Select
            value={construcao.tipoObra}
            onChange={(e) => setConstrucao({...construcao, tipoObra: e.target.value})}
          >
            <option value="concreto">Concreto</option>
            <option value="argamassa">Argamassa</option>
            <option value="contrapiso">Contrapiso</option>
            <option value="reboco">Reboco</option>
          </Select>
        </InputGroup>
      </FormGrid>
      <CalculateButton onClick={calcularConstrucao}>
        Calcular Materiais
      </CalculateButton>
    </CalculatorCard>
  );

  const renderCalculadoraFiltragem = () => (
    <CalculatorCard>
      <CalculatorTitle>Calculadora para Sistemas de Filtragem</CalculatorTitle>
      <FormGrid>
        <InputGroup>
          <Label>Tipo de Filtro</Label>
          <Select
            value={filtragem.tipoFiltro}
            onChange={(e) => setFiltragem({...filtragem, tipoFiltro: e.target.value})}
          >
            <option value="piscina">Piscina</option>
            <option value="poco">Poço Artesiano</option>
            <option value="eta">Estação de Tratamento</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Volume de Água (L)</Label>
          <Input
            type="number"
            value={filtragem.volumeAgua}
            onChange={(e) => setFiltragem({...filtragem, volumeAgua: e.target.value})}
            placeholder="Ex: 50000"
          />
        </InputGroup>
        <InputGroup>
          <Label>Vazão (L/h) - Opcional</Label>
          <Input
            type="number"
            value={filtragem.vazao}
            onChange={(e) => setFiltragem({...filtragem, vazao: e.target.value})}
            placeholder="Ex: 5000"
          />
        </InputGroup>
      </FormGrid>
      <CalculateButton onClick={calcularFiltragem}>
        Calcular Areia Filtrante
      </CalculateButton>
    </CalculatorCard>
  );

  const renderCalculadoraPaisagismo = () => (
    <CalculatorCard>
      <CalculatorTitle>Calculadora para Paisagismo</CalculatorTitle>
      <FormGrid>
        <InputGroup>
          <Label>Área (m²)</Label>
          <Input
            type="number"
            step="0.1"
            value={paisagismo.area}
            onChange={(e) => setPaisagismo({...paisagismo, area: e.target.value})}
            placeholder="Ex: 25.5"
          />
        </InputGroup>
        <InputGroup>
          <Label>Espessura da Camada (cm)</Label>
          <Input
            type="number"
            value={paisagismo.espessuraCamada}
            onChange={(e) => setPaisagismo({...paisagismo, espessuraCamada: e.target.value})}
            placeholder="Ex: 5"
          />
        </InputGroup>
        <InputGroup>
          <Label>Tipo de Aplicação</Label>
          <Select
            value={paisagismo.tipoAplicacao}
            onChange={(e) => setPaisagismo({...paisagismo, tipoAplicacao: e.target.value})}
          >
            <option value="decorativo">Decorativo</option>
            <option value="drenagem">Drenagem</option>
            <option value="jardim">Jardim</option>
          </Select>
        </InputGroup>
      </FormGrid>
      <CalculateButton onClick={calcularPaisagismo}>
        Calcular Seixos
      </CalculateButton>
    </CalculatorCard>
  );

  const renderResultados = () => {
    if (!resultados) return null;

    return (
      <ResultsContainer>
        <ResultTitle>Resultados do Cálculo</ResultTitle>
        
        <ResultItem>
          <ResultLabel>Volume necessário:</ResultLabel>
          <ResultValue>{resultados.volume} m³</ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>Peso aproximado:</ResultLabel>
          <ResultValue>{resultados.peso} toneladas</ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>Custo estimado:</ResultLabel>
          <ResultValue>R$ {resultados.custo}</ResultValue>
        </ResultItem>

        {resultados.tipo === 'construcao' && resultados.cimento > 0 && (
          <>
            <ResultItem>
              <ResultLabel>Cimento necessário:</ResultLabel>
              <ResultValue>{resultados.cimento} kg</ResultValue>
            </ResultItem>
            {resultados.brita > 0 && (
              <ResultItem>
                <ResultLabel>Brita necessária:</ResultLabel>
                <ResultValue>{resultados.brita} m³</ResultValue>
              </ResultItem>
            )}
          </>
        )}

        <TipsContainer>
          <TipsTitle>Dicas Importantes</TipsTitle>
          <TipsList>
            <TipItem>Os valores incluem 10% de margem de segurança</TipItem>
            <TipItem>Preços são estimativos e podem variar conforme a região</TipItem>
            <TipItem>Para projetos grandes, consulte nossos especialistas</TipItem>
            <TipItem>Considere as condições de acesso para entrega</TipItem>
          </TipsList>
        </TipsContainer>
        
        <OrcamentoButton onClick={handleOrcamentoCalculadora}>
          📱 Solicitar Orçamento via WhatsApp
        </OrcamentoButton>
      </ResultsContainer>
    );
  };

  return (
    <CalculadoraContainer id="calculadora">
      <Container>
        <Title>
          <span>Calculadora</span> de Materiais
        </Title>
        <Subtitle>
          Calcule a quantidade exata de materiais necessários para seu projeto. 
          Nossa calculadora considera as especificações técnicas e oferece estimativas precisas.
        </Subtitle>

        <CalculatorTabs>
          <TabButton
            active={abaAtiva === 'construcao'}
            onClick={() => setAbaAtiva('construcao')}
          >
            Construção Civil
          </TabButton>
          <TabButton
            active={abaAtiva === 'filtragem'}
            onClick={() => setAbaAtiva('filtragem')}
          >
            Sistemas de Filtragem
          </TabButton>
          <TabButton
            active={abaAtiva === 'paisagismo'}
            onClick={() => setAbaAtiva('paisagismo')}
          >
            Paisagismo
          </TabButton>
        </CalculatorTabs>

        {abaAtiva === 'construcao' && renderCalculadoraConstrucao()}
        {abaAtiva === 'filtragem' && renderCalculadoraFiltragem()}
        {abaAtiva === 'paisagismo' && renderCalculadoraPaisagismo()}

        {renderResultados()}
      </Container>
    </CalculadoraContainer>
  );
};

export default Calculadora;

