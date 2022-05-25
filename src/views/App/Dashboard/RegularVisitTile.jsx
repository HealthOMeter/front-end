import { P, Pbold, SmallP } from "../../../styles/typography/text.styles";
import { VisitTile } from "./Dashboard.styles";

const RegularVisitTile = ({ visit }) => {
  return (
    <VisitTile className="visit-tile">
      <div className="header">
          <Pbold className="date">
            {visit.month}, {visit.day}
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
