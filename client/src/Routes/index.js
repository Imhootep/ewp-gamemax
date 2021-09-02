import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profil from '../pages/Profil';
import Events from '../pages/Events';
import Docs from '../pages/Docs';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/event" exact component={Events} />
                <Route path="/doc" exact component={Docs} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;