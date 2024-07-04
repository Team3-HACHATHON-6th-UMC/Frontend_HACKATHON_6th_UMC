import React from "react";
import styled from "styled-components";

const PlantCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px #3e7a3b4d;
  width: 150px;
  margin: 10px;
  overflow: hidden;
`;

const PlantImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const PlantName = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;

  background: #eeeeee;
`;

const NewPlant = ({ name, image, onClick }) => {
  return (
    <PlantCard onClick={onClick}>

      <PlantImage src={image} alt={name} />
      <PlantName>{name}</PlantName>
    </PlantCard>
  );
};

export default NewPlant;
