import { P, Pbold, SmallP } from "../../../styles/typography/text.styles";
import { VisitTile } from "./Dashboard.styles";
import { monthNumberToString } from "../../../utils/monthNumberToString";

const RegularVisitTile = ({ visit }) => {
  console.log(visit);
  const date = new Date(visit.date);
  const day = date.getDay();
  let month = date.getMonth();
  month = monthNumberToString(month);

  return (
    <VisitTile className="visit-tile">
      <div className="header">
          <Pbold className="date">
            {month}, {day}
          </Pbold>
          <P className="name">{visit.name}</P>
      </div>
      <div className="footer">
        <SmallP>Every {visit.regularity} months</SmallP>
        <label className="checkbox-label">
          <input type="checkbox" checked={visit.isDone} /><SmallP>Done</SmallP>
        </label>
      </div>
    </VisitTile>
  );
};

export default RegularVisitTile;
