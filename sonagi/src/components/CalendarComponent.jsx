import Calendar from "react-calendar";
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/calendarSlice";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = useSelector((state) => state.calendar.events);
  const dispatch = useDispatch();

  const getEventsForDate = (date) => {
    return events
      .filter((event) => moment(event.date).isSame(moment(date), "day"))
      .map((event, index) => (
        <div key={index} className="event">
          {event.event}
        </div>
      ));
  };

  const handleAddEvent = () => {
    const newEvent = { date: selectedDate.toDateString(), event: "New Event" };
    dispatch(addItem(newEvent));
  };

  return (
    <div>
      <StyledCalendar
        locale="en"
        onChange={setSelectedDate}
        value={selectedDate}
        next2Label={null}
        prev2Label={null}
        tileContent={({ date, view }) =>
          view === "month" && getEventsForDate(date)
        }
      />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default CalendarComponent;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  background: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;

  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  //기본 캘린더 한 칸
  .react-calendar__tile {
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 70px;
  }
  //오늘
  .react-calendar__tile--now {
    border-radius: 6px;
    background-color: white;
    & > abbr {
      width: 18px;
      background-color: #64954a;
      border-radius: 50%;
      color: #ffffff; /* 날짜 숫자를 색*/
    }
  }
  //선택된 것
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffffff;
    & > abbr {
      width: 18px;
      color: #000000; /* 날짜 숫자를 색*/
      background-color: #6f48eb;
      border-radius: 50%;
    }
  }
  //이벤트들
  .event {
    margin-top: 5px;
    font-size: 0.5em;
    background-color: #6f48eb;
    color: white;
    border-radius: 5px;
  }
`;
