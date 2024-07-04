import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyPlant from "../components/MyPlant";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Home = () => {
  return (
    <>
      <MyPlant />
    </>
  );
};

export default Home;
