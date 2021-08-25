import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home'; 
import Family from '../views/Family/Family';
import Documents from '../views/Documents/Documents';
import Calendar from '../views/Calendar/Calendar';
import Dashboard from '../views/Dashboard/Dashboard';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/family" component={Family} />
            <Route path="/documents" component={Documents} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Routes;