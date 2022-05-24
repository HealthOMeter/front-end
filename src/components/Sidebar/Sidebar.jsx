import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarItems } from '../../data/sidebar.data';
import Logo from '../Logo/Logo';
import SidebarBtn from './SidebarBtn';
import { SideBar, Wrapper } from './Sidebar.styles';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const addDropdownOptions = (dropdownItems)=> {
    if (dropdownItems) {
      dropdownItems.map((el) => {
        return <SidebarBtn><img alt="" src={el.icon}></img><p>{el.title}</p></SidebarBtn>;
      });
    };
  };

  return (
    <SideBar>
      <Logo />
      {
        sidebarItems.map((item, idx) => {
          return (
            <Wrapper
              key={idx}
              to={item.url}
              activeLink={currentPath === item.url ? true : false}
            >
              <SidebarBtn>
                <img alt="" src={item.icon}></img><p>{item.title}</p>
              </SidebarBtn>
            </Wrapper>
          )
        })
      }
    </SideBar>
  );
};

export default Sidebar;
