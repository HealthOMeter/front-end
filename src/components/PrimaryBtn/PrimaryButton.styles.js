import styled from 'styled-components';

const bgColor = '#FA497E';
const bgColorHov = '#FF1C62';
const bgColorDis = '#94A3B8';
const txtColor = '#FFFFFF';

//  padding: 8px 100px;

export const PrimaryBtn = styled.button`
  background-color: ${(props) => (props.disabled ? bgColorDis : bgColor)};
  font-weight: 700;
  font-size: 1em;
  line-height: 35px;
  text-align: center;
  color: ${txtColor};
  border: solid 1px transparent;
  transition: all 0.3s;
  padding: auto;
  width: ${(props)=> props.wide ? '100%' : '112px'};
  box-shadow: ${(props) => (props.disabled ? 'none' : '0px 0px 50px rgba(255, 140, 174, 0.5)')};
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => (props.disabled ? bgColorDis : bgColorHov)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    filter: ${(props) => (props.disabled ? 'none' : 'drop-shadow(0px 0px 50px rgba(255, 140, 174, 0.5))')};
    box-shadow: ${(props) => (props.disabled ? 'none' : '0px 0px 50px rgba(255, 140, 174, 0.5)')};
  }
`;
