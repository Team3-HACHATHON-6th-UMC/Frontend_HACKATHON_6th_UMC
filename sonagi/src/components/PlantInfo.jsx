import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1,3fr);
    background-color: white;
    min-height: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 5px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoType = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 22px;
  color: white;
  background: #399B60CC;
  border-radius: 12px;
  margin: 5px 10px;
  font-weight: 300;
  font-size: 15px;
`;

const Detail = styled.p`
  color: black;
  font-size: 15px;
`;

const PlantInfo = () => {

  return (
    <Container>
      <InfoItem>
        <InfoType>계절</InfoType>
        <Detail> 여름 장마 기간이니 물 주는 간격을 줄여요.</Detail>
      </InfoItem>
      <InfoItem>
        <InfoType>날씨</InfoType>
        <Detail>오늘은 비가 오니 물 주는 간격을 줄여요.</Detail>
      </InfoItem>
      <InfoItem>
        <InfoType>기본</InfoType>
        <Detail>일주일에 한 번씩 물 주기</Detail>
      </InfoItem>
    </Container>
  );
};

export default PlantInfo;
