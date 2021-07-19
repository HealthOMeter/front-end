import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../Logo/Logo';
import SidebarBtn from './SidebarBtn';
import { SideBar } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SideBar>
      <Logo />
      <SidebarBtn><Link to="/test">Dashboard</Link></SidebarBtn>
      <SidebarBtn />
    </SideBar>
  );
};

export default Sidebar;
