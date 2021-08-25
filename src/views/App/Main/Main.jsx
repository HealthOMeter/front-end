import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Calendar from '../Calendar/Calendar';
import Dashboard from '../Dashboard/Dashboard';
import Documents from '../Documents/Documents';
import Family from '../Family/Family';
import { MainWrapper } from './Main.styles';

const Main = () => {
    return (
        <MainWrapper>
            <Sidebar />
            <Switch>
                <Route path="/app/calendar" component={Calendar} />
                <Route path="/app/dashboard" component={Dashboard} />
                <Route path="/app/documents" component={Documents} />
                <Route path="/app/family" component={Family} />
            </Switch>
        </MainWrapper>
    );
};

export default Main;
