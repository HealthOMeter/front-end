import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../views/App/Main/Main';
import LandingPage from '../views/Landing/LandingPage/LandingPage';
import Login from '../views/Landing/Login/Login';
import Signup from '../views/Landing/Signup/Signup';
import Calendar from '../views/App/Calendar/Calendar';
import Dashboard from '../views/App/Dashboard/Dashboard';
import Documents from '../views/App/Documents/Documents';
import Family from '../views/App/Family/Family';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/app" component={Main} />
            <Route path="/about" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/app/calendar" component={Main} />
            <Route path="/app/dashboard" component={Main} />
            <Route path="/app/documents" component={Main} />
            <Route path="/app/family" component={Main} />
        </Switch>
    );
};

export default Routes;