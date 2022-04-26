import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { useLocation, Redirect } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Topbar from '../../../components/Topbar/Topbar';
import { MainWrapper } from './Main.styles';
import { elements } from '../dashboard.data';

const Main = () => {

    let location = useLocation();

    return (
        <MainWrapper>
            <Sidebar />
            {
                elements.map((el) => {
                    if (el.path === location.pathname) {
                        return <Fragment key={el.path}>{el.element}</Fragment>;
                    };
                })
            }
            <Topbar />
        </MainWrapper>
    );
};

export default Main;
