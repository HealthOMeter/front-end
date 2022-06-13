import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { NoContentTxtWrapper, VisitsWrapper } from "./Dashboard.styles";
import RegularVisitTile from "./RegularVisitTile";

const Visits = ({ visits }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [flexPosition, setFlexPosition] = useState("center");

  useLayoutEffect(()=> {
    if ((visits.length - startIndex) > 1) {
        setFlexPosition("center");
    } else {
        setFlexPosition("flex-start");
    }
  },[startIndex]);


  const VISITS_PLACEHOLDER = [
    {
      month: "May",
      day: 24,
      name: "Breast USG",
      regularity: 6,
      isDone: false,
    },
    {
      month: "Sep",
      day: 5,
      name: "Abdominal USG",
      regularity: 12,
      isDone: true,
    },
    {
      month: "Oct",
      day: 8,
      name: "Cytology",
      regularity: 24,
      isDone: false,
    },
    {
      month: "Oct",
      day: 8,
      name: "Cytology",
      regularity: 24,
      isDone: false,
    },
  ];

  visits = VISITS_PLACEHOLDER;

  return (
    <>
      {visits.length === 0 ? (
        <NoContentTxtWrapper>
          <NoContentTxt>You don't have any regular visits yet</NoContentTxt>
          <Link to="/create">Create a visit</Link>
        </NoContentTxtWrapper>
      ) : (
        <VisitsWrapper flexPosition={flexPosition}>
          {VISITS_PLACEHOLDER.map((visit, idx) => {
            if (idx >= startIndex && idx < endIndex) {
              return <RegularVisitTile key={visit.name} visit={visit} />;
            }
          })}
        </VisitsWrapper>
      )}
      <div class="buttons">
        {startIndex !== 0 && (
          <svg
            onClick={() => {
              setStartIndex(startIndex - 3);
              setEndIndex(endIndex - 3);
            }}
            className="prev-visits"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" fill="white" />
            <path
              d="M8.98232 14.1757C9.0702 14.176 9.15703 14.1566 9.23643 14.119C9.31583 14.0813 9.38578 14.0263 9.44114 13.9581L12.2823 10.4287C12.3688 10.3234 12.4161 10.1914 12.4161 10.0551C12.4161 9.91889 12.3688 9.78686 12.2823 9.68161L9.34114 6.1522C9.2413 6.03207 9.09782 5.95653 8.94228 5.94219C8.78673 5.92785 8.63186 5.97588 8.51173 6.07573C8.39161 6.17557 8.31606 6.31905 8.30172 6.4746C8.28738 6.63014 8.33542 6.78501 8.43526 6.90514L11.0647 10.0581L8.5235 13.211C8.45157 13.2974 8.40587 13.4025 8.39183 13.514C8.37778 13.6255 8.39597 13.7387 8.44424 13.8402C8.4925 13.9417 8.56883 14.0272 8.66419 14.0867C8.75955 14.1461 8.86995 14.177 8.98232 14.1757Z"
              fill="black"
            />
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="4.5"
              stroke="#B2B2B2"
            />
          </svg>
        )}

        <svg
          onClick={() => {
            setStartIndex(startIndex + 3);
            setEndIndex(endIndex + 3);
          }}
          class="next-visits"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" fill="white" />
          <path
            d="M8.98232 14.1757C9.0702 14.176 9.15703 14.1566 9.23643 14.119C9.31583 14.0813 9.38578 14.0263 9.44114 13.9581L12.2823 10.4287C12.3688 10.3234 12.4161 10.1914 12.4161 10.0551C12.4161 9.91889 12.3688 9.78686 12.2823 9.68161L9.34114 6.1522C9.2413 6.03207 9.09782 5.95653 8.94228 5.94219C8.78673 5.92785 8.63186 5.97588 8.51173 6.07573C8.39161 6.17557 8.31606 6.31905 8.30172 6.4746C8.28738 6.63014 8.33542 6.78501 8.43526 6.90514L11.0647 10.0581L8.5235 13.211C8.45157 13.2974 8.40587 13.4025 8.39183 13.514C8.37778 13.6255 8.39597 13.7387 8.44424 13.8402C8.4925 13.9417 8.56883 14.0272 8.66419 14.0867C8.75955 14.1461 8.86995 14.177 8.98232 14.1757Z"
            fill="black"
          />
          <rect
            x="0.5"
            y="0.5"
            width="19"
            height="19"
            rx="4.5"
            stroke="#B2B2B2"
          />
        </svg>
      </div>
    </>
  );
};

export default Visits;
