import React from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DepoimentosSection = styled.section`
  padding: 4rem 0;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const RatingText = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
  font-size: 1rem;
`;

const DepoimentoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DepoimentoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DepoimentoAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
  color: #2e7d32;
`;

const DepoimentoInfo = styled.div`
  flex: 1;
`;

const DepoimentoName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: #333;
`;

const DepoimentoDate = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const DepoimentoStars = styled.div`
  display: flex;
  color: #ffc107;
  margin-bottom: 1rem;
`;

const GoogleLogo = styled.div`
  text-align: center;
  margin: 2rem 0;
  
  img {
    height: 40px;
  }
`;

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #1b5e20;
  }
`;

const Depoimentos = () => {
  const depoimentos = [
    {
      name: 'Pedro Igor Curcino de Carvalho',
      date: '2021-03-03',
      rating: 5,
      initial: 'P'
    },
    {
      name: 'Gusttavo Barbosa',
      date: '2021-02-24',
      rating: 5,
      initial: 'G'
    },
    {
      name: 'Beatriz Neri',
      date: '2021-01-26',
      rating: 5,
      initial: 'B'
    },
    {
      name: 'Fernanda Rodrigues',
      date: '2021-03-03',
      rating: 5,
      initial: 'F'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <DepoimentosSection id="depoimentos">
      <Container>
        <SectionTitle>Ótimo</SectionTitle>
        <RatingContainer>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < 4 ? "#ffc107" : "#e4e5e9"} size={30} />
          ))}
        </RatingContainer>
        <RatingText>Com base em 1.125 avaliações</RatingText>
        
        <GoogleLogo>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />
        </GoogleLogo>
        
        <Slider {...settings}>
          {depoimentos.map((depoimento, index) => (
            <div key={index}>
              <DepoimentoCard>
                <DepoimentoHeader>
                  <DepoimentoAvatar>{depoimento.initial}</DepoimentoAvatar>
                  <DepoimentoInfo>
                    <DepoimentoName>{depoimento.name}</DepoimentoName>
                    <DepoimentoDate>{depoimento.date}</DepoimentoDate>
                  </DepoimentoInfo>
                </DepoimentoHeader>
                <DepoimentoStars>
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </DepoimentoStars>
              </DepoimentoCard>
            </div>
          ))}
        </Slider>
      </Container>
    </DepoimentosSection>
  );
};

export default Depoimentos;
