import React from 'react';
import { Redirect } from 'react-router';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Topbar from '../../../components/Topbar/Topbar';
import { MainWrapper } from './Main.styles';

const Main = () => {
    return (
        <MainWrapper>
            <Redirect to="/app/dashboard" />
            <Sidebar />
            <Topbar />
        </MainWrapper>
    );
};

export default Main;
