import React from 'react';
import { SidebarItem } from './SidebarBtn.styles';

const SidebarBtn = (props) => {
    return (
        <SidebarItem>{props.children}</SidebarItem>
    );
};

export default SidebarBtn;
