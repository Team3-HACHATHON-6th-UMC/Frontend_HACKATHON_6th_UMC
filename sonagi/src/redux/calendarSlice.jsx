import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    { date: new Date(2024, 6, 5).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 6, 5).toISOString(), event: "선재 | 영양제" },
    { date: new Date(2024, 6, 11).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 6, 18).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 6, 25).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 6, 15).toISOString(), event: "솔 | 물" },
    { date: new Date(2024, 7, 11).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 7, 18).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 7, 25).toISOString(), event: "선재 | 물" },
    { date: new Date(2024, 7, 15).toISOString(), event: "솔 | 물" },
  ],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.events.push(action.payload);
    },
    setItems: (state, action) => {
      state.events = action.payload; // 이벤트 목록을 설정하는 리듀서 추가
    },
  },
});

export const { addItem, setItems } = calendarSlice.actions;

export default calendarSlice.reducer;
