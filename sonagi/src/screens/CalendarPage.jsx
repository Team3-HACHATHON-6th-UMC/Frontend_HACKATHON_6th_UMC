import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CalendarComponent from "../components/CalendarComponent";
import DiaryModal from "../components/DiaryModal";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { addItem, setItems } from "../redux/calendarSlice"; // setItems 추가
import axios from "axios"; // axios 추가

const CalenderPage = () => {
  const [mode, setMode] = useState("record"); // 기본 모드는 record
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [diaryContent, setDiaryContent] = useState(
    "오늘의 일기가 없습니다. 위 작성버튼을 눌러 일기를 작성해주세요."
  );
  const dispatch = useDispatch(); // useDispatch 훅 사용

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "record" ? "diary" : "record"));
  };

  const handleAddEvent = () => {
    setIsModalOpen(true); // 모달 창 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 창 닫기
  };

  const handleEventSubmit = (date, content) => {
    dispatch(addItem({ date: date.toISOString(), event: content }));
    setDiaryContent(content); // 일기 내용 업데이트
  };
  useEffect(() => {
    const fetchAndSetDiaries = async () => {
      try {
        const response = await axios.get(
          "http://3.38.247.228:8080/diary/diaryList/1"
        );
        const diaries = response.data.result.diaries; // 모든 다이어리를 가져옴
        const events = diaries.map((diary) => ({
          date: diary.createdAt,
          event: "☑", // 이벤트 표시용 문자
        }));
        dispatch(setItems(events)); // Redux 스토어에 이벤트 목록 저장
      } catch (error) {
        console.error("Failed to fetch diaries", error);
      }
    };

    if (mode === "diary") {
      fetchAndSetDiaries();
    }
  }, [dispatch, mode]); // 의존성 배열에 dispatch와 mode 추가
  // // 다이어리를 가져와서 Redux 스토어에 저장
  // useEffect(() => {
  //   const fetchAndSetDiaries = async () => {
  //     const diaries = await fetchDiaries(); // 모든 다이어리를 가져옴
  //     const events = diaries.map((diary) => ({
  //       date: diary.createdAt,
  //       event: "☑", // 이벤트 표시용 문자
  //     }));
  //     dispatch(setItems(events)); // Redux 스토어에 이벤트 목록 저장
  //   };

  //   fetchAndSetDiaries();
  // }, [dispatch]); // 의존성 배열에 dispatch 추가

  return (
    <PageContainer>
      <ModeBtnContainer>
        <ModeBtn onClick={handleModeChange} mode={mode}></ModeBtn>
      </ModeBtnContainer>

      {mode === "record" ? (
        <Wrapper>
          <CalendarComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            mode={mode}
          />
          <TodoWrapper>
            <TitleContainer>
              <Title>🪴성장로그</Title>
              <Time>
                {moment(selectedDate).format("YYYY")}년{" "}
                {moment(selectedDate).format("MM")}월{" "}
                {moment(selectedDate).format("DD")}일
              </Time>
            </TitleContainer>
            <Todo>
              <PlantName>선재</PlantName>
              <PlantTodo>
                <PlantContent>물 주기</PlantContent>
                <Time>10:37 AM</Time>
              </PlantTodo>
            </Todo>
            <Todo>
              <PlantName>선재</PlantName>
              <PlantTodo>
                <PlantContent>영양제 주기</PlantContent>
                <Time>10:37 AM</Time>
              </PlantTodo>
            </Todo>
          </TodoWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <CalendarComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            mode={mode}
          />
          <DiaryWrapper>
            <TitleContainer>
              <Title>🪴오늘의 일기</Title>
              <Time>
                {moment(selectedDate).format("YYYY")}년{" "}
                {moment(selectedDate).format("MM")}월{" "}
                {moment(selectedDate).format("DD")}일
              </Time>
            </TitleContainer>
            <DiaryContentContainer>
              <DiaryImg />
              <DiaryContent>
                <span>{diaryContent}</span>
                <AddDiary onClick={handleAddEvent}>작성하기</AddDiary>
              </DiaryContent>
            </DiaryContentContainer>
          </DiaryWrapper>
        </Wrapper>
      )}
      {isModalOpen && (
        <DiaryModal
          onSubmit={handleEventSubmit}
          selectedDate={selectedDate}
          onClose={closeModal}
        />
      )}
    </PageContainer>
  );
};

export default CalenderPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const ModeBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 90vw;
`;
const ModeBtn = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.mode === "record" ? "#ccc" : "#7db49d"};
  border: none;
  border-radius: 30px;
  color: #000000;
  position: relative;
  width: 60px;
  height: 30px;

  &::before {
    content: "${(props) => (props.mode === "record" ? "" : "")}";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.mode === "record" ? "10%" : "60%")};
    transform: translateY(-50%);
    transition: left 0.3s ease;
  }

  &::after {
    content: "${(props) => (props.mode === "record" ? "기록" : "일기")}";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.mode === "record" ? "5%" : "55%")};
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    transition: left 0.3s ease;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 720px;
  border-radius: 15px;
  opacity: 0px;
  background: #ebf5ef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 15px;
  align-items: baseline;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  margin: 0px 0 5px 0;
  align-self: flex-start;
`;

const Todo = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  opacity: 0px;
  margin-bottom: 10px;
  background: linear-gradient(
    90deg,
    rgba(210, 205, 100, 0.5) 0%,
    rgba(113, 174, 108, 0.5) 100%
  );
  display: flex;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
`;

const PlantName = styled.div`
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-right: 1px solid #414141; /* 세로선 추가 */
  padding-right: 10px; /* 텍스트와 세로선 간격 조절 */
`;

const PlantTodo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
`;

const PlantContent = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 28px;
`;

const Time = styled.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  color: #666666;
`;

const DiaryWrapper = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 80%;
  height: 196px;
  border-radius: 10px;
  background: #ffffff;
`;
const DiaryContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const DiaryImg = styled.img`
  width: 40%;
  max-height: 196px;
  margin-left: 10px;
  background-color: #90b787;
`;

const DiaryContent = styled.div`
  width: 50%;
  max-height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :span {
    overflow: scroll;
  }
`;

const AddDiary = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 12px;
  background: #7db49d;
  border: none;
  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
`;
