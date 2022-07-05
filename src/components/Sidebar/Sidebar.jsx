import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sidebarItems } from '../../data/sidebar.data';
import Logo from '../Logo/Logo';
import SidebarBtn from './SidebarBtn';
import { SideBar, Wrapper } from './Sidebar.styles';
import FamilyMembers from './FamilyMembers';
import { Fragment } from 'react/cjs/react.production.min';
import { getFamily } from '../../api/familyMembers.api';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const userId = process.env.REACT_APP_TEST_USER;

  const [renderFamilyMembers, setRenderFamilyMembers] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(()=> {
    getFamily(userId)
    .then((res)=> {
      console.log(res);
      setFamilyMembers(res.data);
    })
  }, []);

  // const addDropdownOptions = (dropdownItems)=> {
  //   if (dropdownItems) {
  //     dropdownItems.map((el) => {
  //       return <SidebarBtn key={el.title}><img alt="" src={el.icon}></img><p>{el.title}</p></SidebarBtn>;
  //     });
  //   };
  // };

  return (
    <SideBar>
      <Logo />
      {
        sidebarItems.map((item, idx) => {
          return (
            <Fragment key={idx}>
            <Wrapper
              onClick={()=> item.title === "Family" ? setRenderFamilyMembers(true) : setRenderFamilyMembers(false)}
              to={item.url}
              activeLink={currentPath === item.url ? true : false}
            >
              <SidebarBtn>
                <img alt="" src={item.icon}></img><p>{item.title}</p>
              </SidebarBtn>
            </Wrapper>
            {
              renderFamilyMembers && (currentPath === item.url) && <FamilyMembers members={familyMembers}/>
            }
            </Fragment>
          )
        })
      }
    </SideBar>
  );
};

export default Sidebar;
