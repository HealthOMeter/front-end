import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../views/App/Main/Main';
import Home from '../views/Landing/Home/Home'; 

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={Main} />
        </Switch>
    );
};

export default Routes;