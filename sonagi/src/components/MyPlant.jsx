import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MyPlant = () => {

  return (
    <Container>
        <span>MyPlant</span>
    </Container>
  );
};

export default MyPlant;
