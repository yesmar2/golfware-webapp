import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

const App = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute component={Layout} />
    </Switch>
);

export default App;
