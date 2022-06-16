import React, { useEffect } from "react";
import 'react-calendar/dist/Calendar.css';
import { CalendarBox as Calendar } from "./CalendarSection.styles";
import { CalendarWrapper } from "./CalendarSection.styles";
import { useState } from "react";
import FilterDropdown from "../../../components/Inputs/FilterDropdown";
import { Toolbar } from "./CalendarSection.styles";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import NewAppointment from "./NewAppointment";
import closeIcon from "../../../assets/icons/close.svg";
import { Subheader } from "../../../styles/typography/headers.styles";
import { getCategories } from "../../../api/categories.api";
import { getAllAppointments } from "../../../api/medicalVisits.api";
import { P } from "../../../styles/typography/text.styles";

const CalendarSection = () => {
  const [value, setValue] = useState(new Date());
  const [toggleNewApptModal, setToggleNewApptModal] = useState(false);

  const familyElPlaceholder = ["All", "Me", "Alen", "Mom"];
  const SORT_TIME = ["all", " incoming", "past"];
  const [categories, setCategories] = useState(["all"]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments(process.env.REACT_APP_TEST_USER)
      .then((res) => {
        setAppointments(res.data);
      })
  }, [])

  useEffect(() => {
    getCategories(process.env.REACT_APP_TEST_USER)
      .then((res) => {
        setCategories(["all", ...res.data]);
      })
  }, []);

  //TODO refactor
  const assignDate = (dateReceived, dateCalendar) => {
    dateReceived = new Date(dateReceived);
    dateCalendar = new Date(dateCalendar);
    const dateReceivedDay = dateReceived.getDate();
    const dateReceivedMonth = dateReceived.getMonth();
    const dateReceivedYear = dateReceived.getYear();

    const dateCalendarDay = dateCalendar.getDate();
    const dateCalendarMonth = dateCalendar.getMonth();
    const dateCalendarYear = dateCalendar.getYear();
    const condition = dateCalendarDay === dateReceivedDay && dateCalendarMonth === dateReceivedMonth && dateCalendarYear === dateReceivedYear;
    console.log(condition);
    return condition;
  }

  return (
    <CalendarWrapper>
      {toggleNewApptModal && <NewAppointment closeModal={() => setToggleNewApptModal(false)} />}
      <Toolbar>
        <FilterDropdown label="Show" elements={familyElPlaceholder} />
        <FilterDropdown label="Sort" elements={SORT_TIME} />
        <FilterDropdown label="Categorize" elements={categories} />
        <PrimaryButton event={() => setToggleNewApptModal(true)}>Add new</PrimaryButton>
      </Toolbar>
      <Calendar
        tileContent={({ date }) => {
          if (appointments.length > 0) {
            return appointments.map((appt, idx)=> {
              if (assignDate(appt.date, date)) {
                return <P key={appt.date + idx}>{appt.name}</P>
              }
            })
          }
        }}
        value={value}
      />
    </CalendarWrapper>
  );
};

export default CalendarSection;
