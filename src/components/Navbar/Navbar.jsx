import React from 'react';
import { useLocation } from 'react-router-dom';
import { navItems } from '../../data/navbar.data';
import Logo from '../Logo/Logo';
import PrimaryButton from '../PrimaryBtn/PrimaryButton';
import { Nav, NavItems, NavLink } from './Navbar.styles';

const Navbar = () => {
    const location = useLocation();
    const currentLoc = location.pathname;
    const APP_PATH = '/app';

    if (!currentLoc.startsWith(APP_PATH)) {
        return (
            <Nav>
                <Logo />
                <NavItems>
                    {navItems.map((item, idx) => {
                        return (
                            item.visibleOn.includes(currentLoc) ?
                                <NavLink key={idx} to={item.url}>
                                    {item.isBtn ? <PrimaryButton>{item.title}</PrimaryButton> : item.title}
                                </NavLink>
                                : null
                            );
                    })}
                </NavItems>
            </Nav>
        )
    } else {
        return null;
    }
};

export default Navbar;