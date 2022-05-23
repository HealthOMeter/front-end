import styled from "styled-components";

export const Text = styled.input`
    font-family: 'Poppins';
    border: 1px solid #D2D9E6;
    box-sizing: border-box;
    border-radius: 11px;
    height: 50px;
    color: #7B89A7;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    padding-left: 47px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  height: 32px;
  width: 245px;

  & svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  & input {
    height: 34px;
  }
`;

export const FilterDropdownText = styled.div`
  border: 1px solid #ececec;
  border-radius: 7px;
  displaY: grid;
  grid-template-columns: 38% 1fr 20px;
  color: #64748B;
  font-size: 11.2px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    padding-left: 0.5rem;
  }

  select {
    color: #64748B;
    font-size: 11.2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    width: 100%;
    border-style: none;
    background-color: transparent;
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    align-self: center;
    z-index: 0;
    cursor: pointer;
  }
`;
