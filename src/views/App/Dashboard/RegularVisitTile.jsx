import { P, Pbold, SmallP } from "../../../styles/typography/text.styles";
import { VisitTile } from "./Dashboard.styles";
import { monthNumberToString } from "../../../utils/monthNumberToString";
import { useEffect, useState } from "react";
import Checkbox from "../../../components/Inputs/Checkbox";
import { markAppointmentDone } from "../../../api/medicalVisits.api";

const RegularVisitTile = ({ visit }) => {
  //TODO: refactor
  const date = new Date(visit.date);
  const day = date.getDate();
  const month = date.getMonth();
  const monthStr = monthNumberToString(month);
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();

  const [isDateToday, setIsDateToday] = useState(false);

  useEffect(()=> {
    if (day === todayDay && month === todayMonth) {
      setIsDateToday(true);
    } else setIsDateToday(false);
  }, [])
  
  const handleIsDoneSetter = ()=> {
    markAppointmentDone(process.env.REACT_APP_TEST_USER, visit.id)
    .then((res)=> console.log(res))
  }

  return (
    <VisitTile isToday={isDateToday} className="visit-tile">
      <div className="header">
          <Pbold className="date">
            {monthStr}, {day}
          </Pbold>
          <P className="name">{visit.name}</P>
      </div>
      <div className="footer">
        <SmallP>Every {visit.regularity} months</SmallP>
          <Checkbox event={handleIsDoneSetter} isChecked={visit.isDone}><SmallP>Done</SmallP></Checkbox>
      </div>
    </VisitTile>
  );
};

export default RegularVisitTile;
