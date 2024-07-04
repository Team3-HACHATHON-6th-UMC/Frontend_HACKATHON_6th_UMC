import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import Calendar from '../components/Calendar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
  padding: 20px;
  background-color: #fff;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Home = () => {

  return (
    <Container>
        <span>Home</span>
    </Container>
  );
};

export default Home;
