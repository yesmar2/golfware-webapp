import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import LeagueApp from './LeagueApp';

const App = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <ProtectedRoute component={LeagueApp} />
    </Switch>
);

export default App;
