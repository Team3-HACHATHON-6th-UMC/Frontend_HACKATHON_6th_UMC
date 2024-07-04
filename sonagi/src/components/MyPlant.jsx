import React from 'react';
import styled from 'styled-components';
import PlantInfo from './PlanInfo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
    //align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Span = styled.span`
    margin-bottom: 10px;
`;

const Img = styled.img`
    height: 320px;
    margin: 0 0 15px 0;
`;

const MyPlant = () => {

  return (
    <Container>
        <Span>식물 이름</Span>
        <Img scr=""/>
        <Span>식물 성격</Span>
        <Span>식물 정보</Span>
        <PlantInfo/>
        <Span>식집사 OO의 기록</Span>
    </Container>
  );
};

export default MyPlant;
