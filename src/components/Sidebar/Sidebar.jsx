import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarItems } from '../../data/sidebar.data';
import Logo from '../Logo/Logo';
import SidebarBtn from './SidebarBtn';
import { SideBar, Wrapper } from './Sidebar.styles';
import FamilyMembers from './FamilyMembers';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [renderFamilyMembers, setRenderFamilyMembers] = useState(false);

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
            <>
            <Wrapper
              onClick={()=> item.title === "Family" ? setRenderFamilyMembers(true) : setRenderFamilyMembers(false)}
              key={idx}
              to={item.url}
              activeLink={currentPath === item.url ? true : false}
            >
              <SidebarBtn>
                <img alt="" src={item.icon}></img><p>{item.title}</p>
              </SidebarBtn>
            </Wrapper>
            {
              renderFamilyMembers && (currentPath === item.url) && <FamilyMembers />
            }
            </>
          )
        })
      }
    </SideBar>
  );
};

export default Sidebar;
