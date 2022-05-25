import React, { useEffect } from "react";
import 'react-calendar/dist/Calendar.css';
import { CalendarBox as Calendar} from "./CalendarSection.styles";
import { CalendarWrapper } from "./CalendarSection.styles";
import { useState } from "react";
import FilterDropdown from "../../../components/Inputs/FilterDropdown";
import { Toolbar } from "./CalendarSection.styles";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import NewAppointment from "./NewAppointment";
import closeIcon from "../../../assets/icons/close.svg";
import { Subheader } from "../../../styles/typography/headers.styles";

const CalendarSection = () => {
  const [value, setValue] = useState(new Date());
  const [toggleNewApptModal, setToggleNewApptModal] = useState(false);

  const familyElPlaceholder = ["Me", "Alen", "Mom", "All"];
  const SORT_TIME = ["Incoming", "Past", "All"];
  const sortCategoriesPlaceholder = ["Physio", "Oropaedist", "Gynecologist", "All"];

  return (
    <CalendarWrapper>
      {toggleNewApptModal && <NewAppointment closeModal={()=> setToggleNewApptModal(false)}/>}
      <Toolbar>
        <FilterDropdown label="Show" elements={familyElPlaceholder}/>
        <FilterDropdown label="Sort" elements={SORT_TIME}/>
        <FilterDropdown label="Categorize" elements={sortCategoriesPlaceholder}/>
        <PrimaryButton event={()=> setToggleNewApptModal(true)}>Add new</PrimaryButton>
      </Toolbar>
      <Calendar
        tileContent={({ date })=> {/**{ return <p>Testing stuff{date.getDate()}</p> **/}}
        value={value}
      />
    </CalendarWrapper>
  );
};

export default CalendarSection;
