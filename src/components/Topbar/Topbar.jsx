import React from 'react';
import { TopBar } from './Topbar.styles';

const Topbar = () => {
    return (
        <TopBar>
            <h1>Hello, Angela!</h1>
            <input type="search" />
            <span>Icon</span>
            <span>Avatar</span>
        </TopBar>
    );
};

export default Topbar;

