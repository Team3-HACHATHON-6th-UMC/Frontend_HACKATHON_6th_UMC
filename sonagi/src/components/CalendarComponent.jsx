import Calendar from "react-calendar";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CalendarComponent = ({ selectedDate, setSelectedDate }) => {
  const events = useSelector((state) => state.calendar.events);

  const getEventsForDate = (date) => {
    return events
      .filter((event) => moment(event.date).isSame(moment(date), "day"))
      .map((event, index) => (
        <div key={index} className="event">
          {event.event}
        </div>
      ));
  };

  return (
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
  );
};

export default CalendarComponent;

const StyledCalendar = styled(Calendar)`
  width: 90%;
  background: none;
  border: none;
  font-family: Arial, Helvetica, sans-serif;

  .react-calendar__navigation button {
    color: #000000;
    min-width: 44px;
    background: none;
    font-size: 20px;
    font-weight: 500;
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
    background-color: #ebf5ef;
    & > abbr {
      width: 20px;
      height: 20px;
      background-color: #ffffff;
      border-radius: 50%;
      color: #000000; /* 날짜 숫자를 색*/
    }
  }
  //선택된 것
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffffff;
    & > abbr {
      width: 18px;
      color: #ffffff; /* 날짜 숫자를 색*/
      background-color: #428066;
      border-radius: 50%;
    }
  }
  //이벤트들
  .event {
    margin-top: 5px;
    font-size: 0.5em;
    background-color: #5e9781;
    color: white;
    border-radius: 5px;
  }
`;
