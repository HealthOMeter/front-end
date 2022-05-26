import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import notif_icon from '../../assets/icons/notification.svg';
import { H1 } from '../../styles/typography/headers.styles';
import Avatar from '../Avatar/Avatar';
import SearchInput from '../Inputs/SearchInput';
import { TopBar } from './Topbar.styles';

const Topbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const username = localStorage.getItem("name") ?? "User";

    let title;

    console.log(pathname);
    switch (pathname) {
        case "/app/documents":
            title = "Documents";
            break;
        case "/app/family":
            title = "Family";
            break;
        case "/app/calendar":
            title = "Calendar";
            break;
        case "/app/settings":
            title = "Settings";
            break;
        default:
            title = `Hello, ${username}!`;
            break;
    }

    return (
        <TopBar>
            <H1>{title}</H1>
            <img src={notif_icon} alt="Notification icon" />
            <Link to="/app/settings"><Avatar isNav={true} /></Link>
        </TopBar>
    );
};

export default Topbar;

