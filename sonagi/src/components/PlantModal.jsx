import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  height: calc(100% - 45px);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const XButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  color: black;
  margin: 5px;
  font-size: 15px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  width: 90%;
  height: 90%;
  min-height: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Span = styled.span`
  font-size: 15px;
  margin: 10px 0;
`;

const H1 = styled.h1`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 25px;
`;

const Img = styled.img`
  height: 250px;
  border-radius: 10px;
  width: 100%;
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
  background: ${(props) => (props.isactive ? "#7DB49D" : "lightgray")};
  height: 30px;
  min-width: 60px;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  font-size: 13px;
`;

const InputContainer = styled.div`
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

  return (
    <ModalWrapper>
      <Modal>
        <Img src={plant.imageUrl} alt={plant.name} />
        <XButton onClick={onClick}>X</XButton>
        <InfoContainer>
          <H1>{plant.name}</H1>
          <Span>물 주는 간격</Span>
          <Span>햇빛 정도</Span>
        </InfoContainer>
        {!showNext ? (
          <>
            <Comment>
              어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
              어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고
              어쩌고저쩌고 어쩌고저쩌고
            </Comment>
            <ButtonContainer>
              <Button onClick={goNext}>식물 추가하기</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <InfoContainer style={{ paddingTop: "0" }}>
              <InputContainer>
                <Span>이름</Span>
                <Input
                  type="text"
                  placeholder="반려 식물을 부를 이름을 적어주세요"
                ></Input>
              </InputContainer>
              <Span>식물 주변 창문 유무</Span>
              <LittleButtonContainer>
                <LittleButton
                  isactive={selectedButtons.window === "yes"}
                  onClick={() => handleButtonClick("window", "yes")}
                >
                  예
                </LittleButton>
                <LittleButton
                  isactive={selectedButtons.window === "no"}
                  onClick={() => handleButtonClick("window", "no")}
                >
                  아니오
                </LittleButton>
              </LittleButtonContainer>
              <Span>햇빛이 얼마나 들어오나요?</Span>
              <LittleButtonContainer>
                <LittleButton
                  isactive={selectedButtons.sunlight === "none"}
                  onClick={() => handleButtonClick("sunlight", "none")}
                >
                  빛 없음
                </LittleButton>
                <LittleButton
                  isactive={selectedButtons.sunlight === "light"}
                  onClick={() => handleButtonClick("sunlight", "light")}
                >
                  조명
                </LittleButton>
                <LittleButton
                  isactive={selectedButtons.sunlight === "sun"}
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
              <Button>입양하기</Button>
            </ButtonContainer>
          </>
        )}
      </Modal>
    </ModalWrapper>
  );
};

export default PlantModal;
