import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/navbar.data';
import Logo from '../Logo/Logo';
import PrimaryButton from '../PrimaryBtn/PrimaryButton';
import { Nav, NavItems, NavLink } from './Navbar.styles';

const Navbar = () => {
    return (
        <Nav>
            <Logo />
            <NavItems>
                {navItems.map((item, idx) => {
                    return (
                        <NavLink key={idx} to={item.url}>
                           {item.isBtn ? <PrimaryButton>{item.title}</PrimaryButton> : item.title}
                        </NavLink>
                    );
                })}
            </NavItems>
        </Nav>
    )
};

export default Navbar;