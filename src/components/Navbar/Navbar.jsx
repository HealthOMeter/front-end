import React from 'react';
import { useLocation } from 'react-router-dom';
import { navItems } from '../../data/navbar.data';
import Logo from '../Logo/Logo';
import PrimaryButton from '../PrimaryBtn/PrimaryButton';
import { Nav, NavItems, NavLink } from './Navbar.styles';

const Navbar = () => {
    const location = useLocation();
    const currentLoc = location.pathname;

    return (
        <Nav>
            <Logo />
            <NavItems>
                {navItems.map((item, idx) => {
                    if (item.visibleOn.includes(currentLoc)){
                        return (
                            <NavLink key={idx} to={item.url}>
                               {item.isBtn ? <PrimaryButton>{item.title}</PrimaryButton> : item.title}
                            </NavLink>
                        );
                    }
                })}
            </NavItems>
        </Nav>
    )
};

export default Navbar;