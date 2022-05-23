import { steps } from "../../views/App/Documents/steps.data";
import styled from "styled-components";

export const ModalWindow = styled.div`
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  position: absolute;
  top: 10%;
  z-index: 5;
  width: 40%;
  height: ${props => props.currentStep === steps.length ? "fit-content" : "80%"};
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  display: grid;
  grid-template-rows: 12% 14% 62% 14%;
  align-items: start;

  & div.header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & img.close-icon {
        width: 16px;
        cursor: pointer;
      }
  }

  & div.bottom-btns {
    display: flex;
    flex-direction row;
    column-gap: 0.8rem;
    align-self: end;
    justify-content: end;
  }
`;