import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DiaryModal = ({ selectedDate, onClose }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.38.247.228:8080/diary/?userId=1",
        {
          title: content,
          content: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("오늘의 다이어리 작성 완료!");
      console.log("Diary Entry Submitted:", {
        date: selectedDate,
        entry: content,
        image,
      });
      onClose(); // 모달창 닫기
    } catch (error) {
      alert("다이어리 작성 오류");
      console.log(error);
    }
  };

  return (
    <ModalBackdrop>
      <form onSubmit={handleSubmit} method="POST" id="Diary">
        <ModalContainer>
          <Header>
            <Date>{selectedDate.toISOString().split("T")[0]}</Date>
            <CloseButton onClick={onClose}>×</CloseButton>
          </Header>
          <ImageContainer>
            <label htmlFor="imageUpload">
              {image ? (
                <ImagePreview src={image} alt="Uploaded Image" />
              ) : (
                <ImagePlaceholder />
              )}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </ImageContainer>
          <TextBox
            placeholder="일기를 작성해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <SaveButton type="submit">일기 저장하기</SaveButton>
        </ModalContainer>
      </form>
    </ModalBackdrop>
  );
};

export default DiaryModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ModalContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  border-radius: 15px;
  background: #ebf5ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  overflow: scroll;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  min-height: 30vw;
  border-radius: 15px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;
`;

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 30vh;
  border-radius: 0px;
`;

const TextBox = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 30vh;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  resize: none;
  font-size: 14px;
  overflow: scroll;
`;

const SaveButton = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 15px;
  background: #7db49d;
  color: white;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 12px;
  text-align: center;
`;
