import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    width: 100vw;
    padding: 2.4% 2%;
    box-sizing: border-box;
    @media (min-width: 1400px) and (max-width: 1699px) {
        padding: 2.4% 5%;
    }
    @media (min-width: 1700px) {
        padding: 2.4% 12%;
    }

    .logo {
        width: 6rem;
        margin-top: 2rem;
    }
`;

export const NavItems = styled.div`
    flex-grow: 0.05;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    justify-content: space-between;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
    margin: 0 10px;
    
    &:link,
    &:visited,
    &:active {
        color: #000;
    }
    &:hover {
        font-weight: bold;
        color: rgba(0, 0, 0, 0.9);
    }

    .primary-btn {
        padding: 6px 16px;
    }
`;
