import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Container = ({ children, className }) => {
  return (
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
