import styled from 'styled-components';

const bgColor = '#FA497E';
const bgColorHov = '#FF1C62';
const bgColorDis = '#94A3B8';
const txtColor = '#FFFFFF';

export const PrimaryBtn = styled.button`
  background-color: ${(props) => (props.disabled ? bgColorDis : bgColor)};
  font-weight: 700;
  font-size: 1em;
  line-height: 27px;
  text-align: center;
  padding: 8px 100px;
  color: ${txtColor};
  border: solid 1px transparent;
  transition: all 0.3s;
  box-shadow: ${(props) => (props.disabled ? 'none' : '0px 0px 50px rgba(255, 140, 174, 0.5)')};
  border-radius: 7px;
  &:hover {
    background-color: ${(props) => (props.disabled ? bgColorDis : bgColorHov)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    filter: ${(props) => (props.disabled ? 'none' : 'drop-shadow(0px 0px 50px rgba(255, 140, 174, 0.5))')};
    box-shadow: ${(props) => (props.disabled ? 'none' : '0px 0px 50px rgba(255, 140, 174, 0.5)')};
  }
`;
