import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    min-height: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const PlantInfo = () => {

  return (
    <Container>
        <span>식물 정보 ~~</span>
    </Container>
  );
};

export default PlantInfo;
