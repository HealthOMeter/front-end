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
  z-index: 2;
  position: relative;

  & a:nth-child(2) {
    margin-top: 23%;
  }
`;

export const Wrapper = styled(({ activeLink, ...props }) => <Link {...props} />)`
    width: 93.5%;
    height: 8%;
    margin-left: 3%;
    border: solid 1px transparent;
    border-radius: 7px;
    background: ${props => props.activeLink ? bgActiveColor : bgColor};
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    font-weight: ${props => props.activeLink ? 600 : 500};
    color: ${props => props.activeLink ? '#2B4474' : '#515E72'};
    &:hover {
      background-color: rgba(223, 229, 241, 0.5);
      border-radius: 7px;
      font-weight: 600;
    }
    &:link,
    &:active,
    &:visited {
      text-decoration: none;
    }
`;
