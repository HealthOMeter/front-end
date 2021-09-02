import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Topbar from '../../../components/Topbar/Topbar';
import { MainWrapper } from './Main.styles';

const Main = () => {
    return (
        <MainWrapper>
            <Sidebar />
            <Topbar />
        </MainWrapper>
    );
};

export default Main;
