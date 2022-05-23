import styled from "styled-components";

export const InputLabel = styled.label`
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;

  &:focus-visible {
    outline: 1px solid #B8CFF9;
    filter: drop-shadow(0px 0px 5px #A0BEF3);
    border-radius: 2px;
  }
`;

export const InputText = styled.input`
  height: 50px;
  width: 95%;
  border: 1px solid #d2d9e6;
  border-radius: 2px;

  &:focus-visible {
    outline: 1px solid #B8CFF9;
    filter: drop-shadow(0px 0px 5px #A0BEF3);
    border-radius: 2px;
  }
`;

export const InputDropdown = styled.select`
  height: 50px;
  width: 96%;
  border: 1px solid #d2d9e6;
  border-radius: 2px;
  background: #fff;

  &:focus {
    outline: 1px solid #B8CFF9;
    filter: drop-shadow(0px 0px 5px #A0BEF3);
    border-radius: 2px;
  }
`;
