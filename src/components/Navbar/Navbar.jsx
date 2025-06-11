import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animações
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Container principal da navbar
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 
    'rgba(82, 196, 26, 0.95)' : 
    'linear-gradient(135deg, #52c41a 0%, #2c5530 100%)'
  };
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  padding: 0;
  z-index: 1000;
  box-shadow: ${props => props.scrolled ? 
    '0 4px 20px rgba(0,0,0,0.15)' : 
    '0 2px 10px rgba(0,0,0,0.1)'
  };
  transition: all 0.3s ease;
  height: ${props => props.scrolled ? '65px' : '70px'};
`;

// Conteúdo interno da navbar
const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100%;
`;

// Logo container
const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001;
  
  img {
    height: ${props => props.scrolled ? '45px' : '50px'};
    width: auto;
    transition: height 0.3s ease;
  }
`;

// Menu desktop
const DesktopMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 5px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Overlay para mobile
const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

// Menu mobile
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background: linear-gradient(180deg, #52c41a 0%, #2c5530 100%);
  z-index: 1000;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -5px 0 25px rgba(0,0,0,0.2);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

// Header do menu mobile
const MobileMenuHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 70px;
  
  h3 {
    color: white;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

// Lista de itens do menu mobile
const MobileMenuList = styled.ul`
  list-style: none;
  padding: 20px 0;
  margin: 0;
  height: calc(100vh - 130px);
  overflow-y: auto;
`;

// Item do menu
const MenuItem = styled.li`
  margin: 0;
`;

// Link base para ambos os menus
const BaseLink = styled.div`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: white;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover::before {
    width: 100%;
  }
`;

// Link desktop
const DesktopLink = styled(BaseLink)`
  padding: 10px 16px;
  border-radius: 25px;
  font-size: 0.95rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

// Link mobile
const MobileLink = styled(BaseLink)`
  display: block;
  padding: 15px 20px;
  font-size: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    padding-left: 30px;
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.15);
    border-left: 4px solid white;
  }
`;

// Botão hamburger
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// Linhas do hamburger
const HamburgerLine = styled.span`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
  }
`;

// Componente principal
const Navbar = ({ logoSrc }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Fechar menu ao clicar no overlay
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Itens do menu
  const menuItems = [
    { to: '/', label: 'Início', type: 'link' },
    { to: '/#inovacao', label: 'Inovação', type: 'hash' },
    { to: '/catalogo', label: 'Catálogo', type: 'link' },
    { to: '/pedidos', label: 'Pedidos', type: 'link' },
    { to: '/#calculadora', label: 'Calculadora', type: 'hash' },
    { to: '/#areia-filtrante', label: 'Areia Filtrante', type: 'hash' },
    { to: '/#cristais', label: 'Cristais', type: 'hash' },
    { to: '/#construcao-civil', label: 'Construção Civil', type: 'hash' },
    { to: '/#sobre', label: 'Sobre', type: 'hash' }
  ];

  // Renderizar item do menu desktop
  const renderDesktopItem = (item, index) => {
    const isActive = location.pathname === item.to || 
                    (item.type === 'hash' && location.pathname === '/' && location.hash === item.to.split('#')[1]);
    
    if (item.type === 'link') {
      return (
        <MenuItem key={index}>
          <Link to={item.to} style={{ textDecoration: 'none' }}>
            <DesktopLink className={isActive ? 'active' : ''}>
              {item.label}
            </DesktopLink>
          </Link>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <a href={item.to} style={{ textDecoration: 'none' }}>
            <DesktopLink className={isActive ? 'active' : ''}>
              {item.label}
            </DesktopLink>
          </a>
        </MenuItem>
      );
    }
  };

  // Renderizar item do menu mobile
  const renderMobileItem = (item, index) => {
    const isActive = location.pathname === item.to || 
                    (item.type === 'hash' && location.pathname === '/' && location.hash === item.to.split('#')[1]);
    
    if (item.type === 'link') {
      return (
        <MenuItem key={index}>
          <Link to={item.to} style={{ textDecoration: 'none' }} onClick={closeMenu}>
            <MobileLink className={isActive ? 'active' : ''}>
              {item.label}
            </MobileLink>
          </Link>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <a href={item.to} style={{ textDecoration: 'none' }} onClick={closeMenu}>
            <MobileLink className={isActive ? 'active' : ''}>
              {item.label}
            </MobileLink>
          </a>
        </MenuItem>
      );
    }
  };

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavbarContent>
          <Logo scrolled={scrolled}>
            <img src={logoSrc} alt="Mineração Cezar" />
          </Logo>
          
          {/* Menu Desktop */}
          <DesktopMenu>
            {menuItems.map((item, index) => renderDesktopItem(item, index))}
          </DesktopMenu>
          
          {/* Botão Hamburger */}
          <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerLine isOpen={isMenuOpen} />
            <HamburgerLine isOpen={isMenuOpen} />
            <HamburgerLine isOpen={isMenuOpen} />
          </HamburgerButton>
        </NavbarContent>
      </NavbarContainer>

      {/* Overlay Mobile */}
      <MobileOverlay isOpen={isMenuOpen} onClick={closeMenu} />

      {/* Menu Mobile */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <h3>Menu</h3>
        </MobileMenuHeader>
        <MobileMenuList>
          {menuItems.map((item, index) => renderMobileItem(item, index))}
        </MobileMenuList>
      </MobileMenu>
    </>
  );
};

export default Navbar;

