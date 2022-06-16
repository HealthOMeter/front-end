import styled from "styled-components";
import { H4 } from "../../../styles/typography/headers.styles";

export const DashboardStructure = styled.main`
  display: grid;
  grid-template-columns: 62% 1fr;
  grid-template-rows: 16vw 42vh;
  height: 72vh;
  row-gap: 2rem;
  column-gap: 2rem;
  margin: 8.5rem 3rem;
  width: 100%;
`;

export const DashboardBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 70px #e5e5e5;
  border-radius: 7px;
  position: relative;
  max-height: 49vh;
  overflow-y: hidden;

  & button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  .buttons {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    column-gap: 0.4rem;
    display: flex;

    svg {
      cursor: pointer;
    }

    .prev-visits {
      transform: rotate(180deg);
    }
  }

  .documents-content,
  .space-content,
  .family-content {
    padding: 2rem;
    height: 56%;
    display: flex;
    align-items: baseline;
  }

  .documents-content {
    div {
      width: 100%;
    }
  }

  .family-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const DashboardBoxTitle = styled(H4)`
  display: flex;
  column-gap: 0.7rem;
  padding: 2rem 2rem 0 2rem;
`;

export const FreeSpaceBarWrapper = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  border-radius: 8px;
  height: 7px;
  z-index: 2;
  position: relative;
`;

export const FreeSpaceBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.takenSpacePercent}%;
  height: inherit;
  border-radius: inherit;
  background-color: #3864bc;
  z-index: 3;
`;

export const DocumentsTableHead = styled.div`
  display: grid;
  grid-template-columns: 34% 30% 37%;
  border-bottom: solid 1px #b2b2b2;
  padding-bottom: 0.3rem;
  text-align: center;

  & p {
    font-size: 12px;
    color: #515e72;
    font-weight: 550;
  }
`;

export const DocumentRow = styled.div`
  display: grid;
  grid-template-columns: 7% 23% 38% 33%;
  align-items: center;
  background-color: ${(props) => (props.darkBgr ? "#FBFBFB" : "#fff")};
  height: 50px;
  padding: 0.2rem 0.5rem;
  border-radius: 7px;
  text-align: center;

  & > p {
    font-size: 14px;
    font-weight: 400;
  }

  & .doc-name {
    color: #000000;
  }

  & .doc-category,
  & .doc-date {
    color: #515e72;
  }
`;

export const NoContentTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
  row-gap: 0.8rem;

  & img {
    width: 50px;
  }

  & a {
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
  }

  & .free-space-txt {
    align-self: start;
    color: #515e72;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const VisitsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 75%;
  width: 95%;
  align-items: flex-start;
  justify-content: ${(props) => props.flexPosition};
  overflow-x: hidden;
  column-gap: 1rem;

  .visit-tile:first-child {
    margin-left: 2rem;
  }

  .visit-tile:last-child {
    margin-right: 2rem;
  }
`;

export const VisitTile = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 70px rgba(66, 66, 66, 0.1);
  border: 2px solid ${((props)=> (props.isToday ? "rgba(250, 73, 126, 0.7)" : "transparent"))};
  border-radius: 7px;
  height: 68%;
  width: 33%;
  margin-top: 2.5rem;
  padding: 1.2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .active {
    border: 2px solid rgba(250, 73, 126, 0.7);
    box-shadow: 0px 0px 70px rgba(66, 66, 66, 0.1);
    border-radius: 7px;
  }

  .header {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;

    .date {
      width: 30%;
    }

    .name {
      border-left-style: solid;
      border-left-width: 1px;
      border-left-color: #b2b2b2;
      width: 70%;
      padding-left: 1rem;
      box-sizing: border-box;
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p:first-child {
      color: #515e72;
    }

    .checkbox-label {
      display: inline-flex;
      align-items: center;
      column-gap: 0.5rem;
    }
  }
`;

export const MemberTile = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(133, 133, 133, 0.2);
  border-radius: 7px;
  width: 45%;
  height: 80%;
  display: grid;
  grid-template-rows: 80% 15% 15%;
  box-sizing: border-box;
  padding: 1rem;
  align-content: center;
  justify-content: center;
`;
