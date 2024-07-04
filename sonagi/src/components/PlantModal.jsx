import React from 'react';
import styled from 'styled-components';
import PlantInfo from './PlantInfo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #399B601A;
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Span = styled.span`
    font-size: 13px;
  color: gray; 
  margin-top: auto;
  margin-left: 5px;
`;

const H1 = styled.h1`
    margin-bottom: 10px;
    font-weight: 700;
`;

const Img = styled.img`
    height: 250px;
    margin: 0 0 15px 0;
    border-radius: 10px;
`;

const Comment = styled.p`
  color: black;
  font-size: 15px;
  margin: 10px;
`;

const Button = styled.button`
    color: white;
    background: #7DB49D;
`;

const PlantModal = () => {

  return (
    <Container>  
        <Img scr=""/>
        <H1>몬스테라</H1>
        <Span>물 주는 간격</Span>
        <Span>햇빛 정도</Span>
        <Comment>어쩌고</Comment>
        <Button>식물 추가하기</Button>
    </Container>
  );
};

export default PlantModal;
