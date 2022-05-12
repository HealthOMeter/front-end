import styled from "styled-components";

export const DragDropWrapper = styled.label`
  background-color: #fcfdff;
  border: 1px dashed #b8cff9;
  box-sizing: border-box;
  border-radius: 7px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  & input {
    visibility: none;
    height: 0;
  }

  & img {
    width: 72px;
  }

  & a:link,
  & a:visited,
  & a:active  {
    font-size: 12px;
    color: #313774;
  }
`;
