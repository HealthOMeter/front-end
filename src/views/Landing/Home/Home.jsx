import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import { HomeWrapper } from './Home.styles';

const Home = () => {
    return (
        <HomeWrapper>
            <Navbar />
            <Switch>
                <Route path="/about" />
                <Route path="/login" />
                <Route path="/signup" />
            </Switch>
        </HomeWrapper>
    );
};

export default Home;
