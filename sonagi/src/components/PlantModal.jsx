import React, { useState } from "react";
import styled from "styled-components";
import tear from "../assets/images/tear.png";
import sun1 from "../assets/images/sun1.png";
import sun2 from "../assets/images/sun2.png";
import sun3 from "../assets/images/sun3.png";
import sun4 from "../assets/images/sun4.png";
import q from "../assets/images/q.png";
import { useNavigate } from "react-router-dom";

const ModalWrapper = styled.div`
  display: flex;
  height: calc(100% - 45px);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #399b601a;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Span = styled.span`
  font-size: 15px;
  margin: 10px 0;
  font-weight: 600;
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
  font-size: 13px;
  margin: 0 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  margin-left: auto;
`;

const Button = styled.button`
  color: white;
  background: #7db49d;
  height: 50px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
`;

const LittleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LittleButton = styled.button.attrs((props) => ({
  "data-isactive": props.isactive,
}))`
  color: white;
  background: ${(props) => (props.$isactive ? "#7DB49D" : "lightgray")};
  height: 30px;
  min-width: 60px;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  font-size: 13px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  border: solid 1px gray;
  border-radius: 12.5px;
  margin: 10px;
  padding: 0 5px;
`;

const PlantModal = ({ onClick, plant }) => {
  const [showNext, setShowNext] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState({
    window: null,
    sunlight: null,
  });

  const navigate = useNavigate();

  const handleButtonClick = (type, value) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [type]: prevState[type] === value ? null : value,
    }));
  };

  const goNext = () => {
    setShowNext(true);
  };

  const goPrev = () => {
    setShowNext(false);
  };

  const handleAddPlant = () => {
    navigate("/");
  };

  return (
    <ModalWrapper>
      <Modal>
        <Img src={plant.imageUrl} alt={plant.name} />
        <XButton onClick={onClick}>X</XButton>
        <InfoContainer>
          <H1>{plant.name}</H1>
          <Container>
            <Span style={{ marginRight: "40px" }}>물 주는 간격</Span>
            <img src={tear} style={{ height: "20px", width: "auto" }} />
            <Span style={{ marginLeft: "20px" }}>1.5주에 한번</Span>
            <img
              src={q}
              style={{ marginLeft: "20px", height: "15px", width: "auto" }}
            />
          </Container>
          <Container>
            <Span style={{ marginRight: "60px" }}>햇빛 정도</Span>
            <img src={sun3} />
          </Container>
        </InfoContainer>
        {!showNext ? (
          <>
            <Comment>
              몬스테라는 실내에서도 잘 자라는 식물로, 크고 독특한 구멍이 있는 큰
              잎이 특징입니다. 열대 우림이 원산지인 몬스테라는 높은 습도와 밝은
              간접 빛을 좋아합니다. 물을 줄 때는 흙이 약간 건조해질 때까지
              기다리는 것이 좋습니다. 과습을 피하기 위해 배수가 잘 되는 토양을
              사용하세요. 잎에 먼지가 쌓이면 부드러운 천으로 닦아주면 광합성
              효율이 올라갑니다.
            </Comment>
            <ButtonContainer>
              <Button onClick={goNext}>식물 추가하기</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <InfoContainer style={{ paddingTop: "0" }}>
              <Container>
                <Span>이름</Span>
                <Input
                  type="text"
                  placeholder="반려 식물을 부를 이름을 적어주세요"
                ></Input>
              </Container>
              <Span>식물 주변 창문 유무</Span>
              <LittleButtonContainer>
                <LittleButton
                  $isactive={selectedButtons.window === "yes"}
                  onClick={() => handleButtonClick("window", "yes")}
                >
                  예
                </LittleButton>
                <LittleButton
                  $isactive={selectedButtons.window === "no"}
                  onClick={() => handleButtonClick("window", "no")}
                >
                  아니오
                </LittleButton>
              </LittleButtonContainer>
              <Span>햇빛이 얼마나 들어오나요?</Span>
              <LittleButtonContainer>
                <LittleButton
                  $isactive={selectedButtons.sunlight === "none"}
                  onClick={() => handleButtonClick("sunlight", "none")}
                >
                  빛 없음
                </LittleButton>
                <LittleButton
                  $isactive={selectedButtons.sunlight === "light"}
                  onClick={() => handleButtonClick("sunlight", "light")}
                >
                  조명
                </LittleButton>
                <LittleButton
                  $isactive={selectedButtons.sunlight === "sun"}
                  onClick={() => handleButtonClick("sunlight", "sun")}
                >
                  햇살
                </LittleButton>
              </LittleButtonContainer>
            </InfoContainer>
            <ButtonContainer>
              <Button onClick={goPrev} style={{ backgroundColor: "lightgray" }}>
                이전 단계
              </Button>
              <Button onClick={handleAddPlant}>입양하기</Button>
            </ButtonContainer>
          </>
        )}
      </Modal>
    </ModalWrapper>
  );
};

export default PlantModal;
