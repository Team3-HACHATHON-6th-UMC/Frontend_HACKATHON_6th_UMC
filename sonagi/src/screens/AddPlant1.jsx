import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NewPlant from "../components/NewPlant";

const Body = styled.div`
  background-color: #c2e0d6;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

const Title = styled.div`
  padding-top: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-right: auto;
  width: 200px;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 350px;
  height: 35px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 4px 8px 0px #3e7a3b4d;
`;

const Countainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const AddPlant = () => {
  return (
    <Body>
      <Title>식물 추가하기</Title>
      <Input type="text" />
      <Countainer>
        <NewPlant />
        <NewPlant />
        <NewPlant />
        <NewPlant />
        <NewPlant />
        <NewPlant />
        <NewPlant />
        <NewPlant />
      </Countainer>
    </Body>
  );
};

export default AddPlant;
