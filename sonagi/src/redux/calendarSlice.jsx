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
  },
});

export const { addItem } = calendarSlice.actions;
export default calendarSlice.reducer;
