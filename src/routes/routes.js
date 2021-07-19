import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
              <Sidebar />
              <main>dasdasd</main>
            </Route>
            <Route path="/test">
                <h1>Helllooo</h1>
            </Route>
        </Switch>
    );
};

export default Routes;