import React, { useState } from "react";
import styled from "styled-components";
import PlantInfo from "./PlantInfo";
import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.png";
import d from "../assets/images/d.png";
import a1 from "../assets/images/a1.png";
import b1 from "../assets/images/b1.png";
import c1 from "../assets/images/c1.png";
import d1 from "../assets/images/d1.png";
import heart from "../assets/images/heart.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #399b601a;
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
  align-items: center;
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
  background: #ffffff;
  align-items: center;
  justify-content: center;
`;

const Comment = styled.p`
  color: black;
  font-size: 15px;
  margin: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  user-select: none; /* Prevents text selection */
  
  &:focus {
    outline: none;
  }
`;

const MyPlant = () => {
  const initialImages = [a, b, c, d];
  const toggledImages = [a1, b1, c1, d1];
  const [images, setImages] = useState(initialImages);

  const handleImageClick = (index) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index ? (img === initialImages[i] ? toggledImages[i] : initialImages[i]) : img
      )
    );
  };

  return (
    <Container>
      <NameContainer>
        <PlantName>선재</PlantName>
        <PlantType>몬스테라</PlantType>
      </NameContainer>
      <Img src="https://cdn.imweb.me/upload/S201905295cee7c0f94cee/823c3ee408e80.jpeg" />
      <H1>선재의 마음</H1>
      <StatusContainer>
        <CommentContainer>
          <Comment>만나서 반가워! 앞으로 같이 힐링하자</Comment>
        </CommentContainer>
        <img src={heart} style={{ marginLeft: "60px" }} />
      </StatusContainer>
      <H1>Green Step</H1>
      <PlantInfo />
      <H1>오늘의 기록</H1>
      <GridContainer>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

export default MyPlant;
