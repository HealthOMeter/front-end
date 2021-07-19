import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../Logo/Logo';
import SidebarBtn from './SidebarBtn';
import icon1 from '../../assets/icons/dashboard.svg';
import { SideBar } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SideBar>
      <Logo />
      <SidebarBtn active={false}><Link to="/test"><img src={icon1}></img>Dashboard</Link></SidebarBtn>
      <SidebarBtn active={true}><Link to="/test"><img src={icon1}></img>Documents</Link></SidebarBtn>
      <SidebarBtn active={false}><Link to="/test"><img src={icon1}></img>Family</Link></SidebarBtn>
      <SidebarBtn active={false}><Link to="/test"><img src={icon1}></img>Calendar</Link></SidebarBtn>
    </SideBar>
  );
};

export default Sidebar;
