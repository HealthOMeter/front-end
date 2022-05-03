import styled from "styled-components";
import { SmallP } from "../../../styles/typography/text.styles";

const BAR_LENGTH = 80;

export const BgrOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(54, 54, 54, 0.8);
`;

export const AddFileWindow = styled.div`
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  position: absolute;
  top: 10%;
  z-index: 5;
  width: 40%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  display: grid;
  grid-template-rows: 12% 14% 75%;
  align-items: start;

  & div.header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & img.close-icon {
        width: 16px;
      }
  }
`;

export const StepsBarContainer = styled.div`
  width: 100%;

  & div.steps-names {
    display: grid;
    grid-template-columns: 36% 43% 7%;
    width: 100%;
    padding-left: 30px;
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div.middle-line {
    height: 2.72px;
    background-color: #d7d7d7;
    width: ${BAR_LENGTH}%;
    position: relative;
    bottom: -16px;
    z-index: 1;
  }

  & div.middle-line--done {
    width: ${(props) => props.donePercent + "%"};
  }

  & div.steps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${BAR_LENGTH}%;
    position: relative;
    z-index: 4;
  }
`;

export const StepBall = styled.div`
  background-color: ${(props) => (props.done ? "#0041A4" : "#D7D7D7")};
  border-radius: 50%;
  width: 28.98px;
  height: 28.98px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12.68px;
  color: #fff;
`;

export const StepName = styled(SmallP)`
  color: ${(props)=> props.done ? "#0041A4" : "#D7D7D7"};
  text-transform: capitalize;
`;