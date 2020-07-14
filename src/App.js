import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import LeagueApp from './components/LeagueApp';

const App = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute component={LeagueApp} />
    </Switch>
);

export default App;
