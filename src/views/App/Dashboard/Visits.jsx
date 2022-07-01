import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { NoContentTxtWrapper, VisitsWrapper } from "./Dashboard.styles";
import RegularVisitTile from "./RegularVisitTile";
import SmallNextPrevIcon from "../../../components/Icons/SmallNextPrevIcon";

const Visits = ({ visits }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [flexPosition, setFlexPosition] = useState("center");
  const [regularVisits, setRegularVisits] = useState(visits);
  const triggerNewVisit = {
    pathname: '/app/calendar',
    newAppt: true
  }

  useLayoutEffect(() => {
    if ((visits.length - startIndex) > 2) {
      setFlexPosition("center");
    } else {
      setFlexPosition("flex-start");
    }
  }, [startIndex]);

  useEffect(() => {
    if (visits.length > 0) {
      const sortedVisits = visits.sort((elA, elB) => {
        if (elA.date > elB.date) {
          return 1;
        }
        if (elA.date < elB.date) {
          return -1;
        }
        return 0;
      })
      setRegularVisits(sortedVisits);
    }
  }, [visits]);


  return (
    <>
      {regularVisits.length === 0 ? (
        <NoContentTxtWrapper>
          <NoContentTxt>You don't have any regular visits yet</NoContentTxt>
          <Link to={triggerNewVisit}>Create a visit</Link>
        </NoContentTxtWrapper>
      ) : (
        <VisitsWrapper flexPosition={flexPosition}>
          {regularVisits.map((visit, idx) => {
            if (idx >= startIndex && idx < endIndex) {
              return <RegularVisitTile key={visit.name + idx} visit={visit} />;
            }
          })}
        </VisitsWrapper>
      )}
      {
        regularVisits.length > 0 && (
          <div className="buttons">
            {startIndex !== 0 && (
              <SmallNextPrevIcon direction="prev" event={() => {
                setStartIndex(startIndex - 3);
                setEndIndex(endIndex - 3);
              }} />
            )}
            {
              regularVisits.length > endIndex && (
                <SmallNextPrevIcon direction="next" event={() => {
                  setStartIndex(startIndex + 3);
                  setEndIndex(endIndex + 3);
                }} />
              )
            }
          </div>
        )
      }

    </>
  );
};

export default Visits;
