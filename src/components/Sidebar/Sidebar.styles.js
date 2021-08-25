import styled from 'styled-components';
import { Link } from 'react-router-dom';

const bgColor = '#FFFFFF';
const bgActiveColor = '#DFE5F1';

export const SideBar = styled.aside`
  width: 16.7vw;
  height: 100vh;
  background: ${bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;

  & div:nth-child(2) {
    margin-top: 23%;
  }
`;

export const Wrapper = styled(Link)`
    width: 95%;
    height: 8%;
    border: solid 1px transparent;
    border-radius: 7px;
    background: ${props => props.active ? bgActiveColor : bgColor};
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    font-weight: ${props => props.active ? 600 : 500};
    color: ${props => props.active ? '#2B4474' : '#515E72'};
    margin-left: 7px;
    &:hover {
      background-color: rgba(223, 229, 241, 0.5);
      border-radius: 7px;
    }
    &:link,
    &:active,
    &:visited {
      text-decoration: none;
    }
`;
