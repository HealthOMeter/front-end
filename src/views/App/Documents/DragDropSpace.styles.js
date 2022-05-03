import styled from "styled-components";

export const DragDropWrapper = styled.div`
  background-color: #fcfdff;
  border: 1px dashed #b8cff9;
  box-sizing: border-box;
  border-radius: 7px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

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
