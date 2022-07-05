import styled from "styled-components";

export const Text = styled.input`
  font-family: "Poppins";
  border: 1px solid #d2d9e6;
  box-sizing: border-box;
  border-radius: 11px;
  height: 50px;
  color: #7b89a7;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  padding-left: 47px;

  &:focus-visible {
    outline: 1px solid #b8cff9;
    filter: drop-shadow(0px 0px 5px #a0bef3);
    border-radius: 2px;
  }
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
  display: grid;
  grid-template-columns: 38% 1fr 20px;
  color: #64748b;
  font-size: 11.2px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    padding-left: 0.5rem;
  }

  select {
    color: #64748b;
    font-size: 11.2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
    width: 117%;
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

export const CheckboxInput = styled.input`
  border: 1.75px solid #1a1a1a;
`;

export const MenuInput = styled.label`
  border: 1px solid #d2d9e6;
  border-radius: 2px;
  display: grid;
  width: 75%;
  grid-template-columns: ${(props) => (props.isValid ? "80% 20%" : "100% 0")};
  background-color: #fff;
  align-items: center;
  height: 65%;
  box-sizing: border-box;

  input {
    border: 1px solid #d2d9e6;
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
    color: #2B4474;
    font-weight: 500;
  }

  img {
    align-self: center;
    justify-self: center;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
      scale: 1.2;
    }
  }
`;
