import React from 'react';
import notif_icon from '../../assets/icons/notification.svg';
import { H1 } from '../../styles/typography/headers.styles';
import Avatar from '../Avatar/Avatar';
import SearchInput from '../Inputs/SearchInput';
import { TopBar } from './Topbar.styles';

const Topbar = () => {
    const username = localStorage.getItem("name") ?? "User";
    return (
        <TopBar>
            <H1>Hello, {username}!</H1>
            <SearchInput />
            <img src={notif_icon} alt="Notification icon" />
            <Avatar />
        </TopBar>
    );
};

export default Topbar;

