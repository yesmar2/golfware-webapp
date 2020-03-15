import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedApp from './components/ProtectedApp';

const App = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute component={ProtectedApp} />
    </Switch>
);

export default App;
