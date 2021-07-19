import React from 'react';
import { SidebarItem } from './SidebarBtn.styles';

const SidebarBtn = (props) => {
    return (
        <SidebarItem active={props.active}>{props.children}</SidebarItem>
    );
};

export default SidebarBtn;
