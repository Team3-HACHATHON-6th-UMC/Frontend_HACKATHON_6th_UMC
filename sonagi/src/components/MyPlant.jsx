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
const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

const PlantName = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #336633; 
`;

const PlantType = styled.span`
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

const StatusContainer = styled.div`
  display: flex;
  height: 50px;
  //justify-content: center;
  align-items: center;
  background-color: none; /* Light background for status */
  padding: 20px;
  border: solid 1px lightgray;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CommentContainer = styled.div`
    display: flex;
    width: 165px;
    height: 60px;
    border-radius: 10px;
    background: #FFFFFF;
    align-items: center;
    justify-content: center;
`;

const Comment = styled.p`
  color: black;
  font-size: 15px;
  margin: 10px;
`;

const RecordContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
`;

const TodoContainer = styled.div`
    display: flex;
    height: 82px;
    background-color: white;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

const Todo = styled.span`
    font-size: 13px;
    color: gray;
`;

const MyPlant = () => {

    const addPoint = () => {

    }

  return (
    <Container>
        <NameContainer>
            <PlantName>선재</PlantName>
            <PlantType>몬스테라</PlantType>
        </NameContainer>
        <Img scr=""/>
        <H1>선재의 마음</H1>
        <StatusContainer>
            <CommentContainer>
                <Comment>만나서 반가워! 앞으로 같이 힐링하자</Comment>
            </CommentContainer>
        </StatusContainer>
        <H1>정보</H1>
        <PlantInfo/>
        <H1>오늘의 기록</H1>
        <RecordContainer>
            <TodoContainer onClick={addPoint}><Todo>물 주기</Todo></TodoContainer>
            <TodoContainer onClick={addPoint}><Todo>햇빛쬐기</Todo></TodoContainer>
            <TodoContainer onClick={addPoint}><Todo>분갈이</Todo></TodoContainer>
            <TodoContainer onClick={addPoint}><Todo>영양제</Todo></TodoContainer>
        </RecordContainer>
    </Container>
  );
};

export default MyPlant;
