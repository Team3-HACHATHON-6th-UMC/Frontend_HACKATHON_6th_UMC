import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    { date: new Date(2024, 6, 1).toISOString(), event: "Meeting with Bob" },
    { date: new Date(2024, 6, 1).toISOString(), event: "Project Deadline" },
    { date: new Date(2024, 6, 8).toISOString(), event: "Dentist Appointment" },
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
