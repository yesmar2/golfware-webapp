import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const {
        component: Component,
        isAuthenticated,
        isVerifying,
    } = props;

    return (
        <Route
            render={() => {
                if (isVerifying) {
                    return <div />;
                }

                if (isAuthenticated) {
                    return <Component />;
                }

                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
};

export default ProtectedRoute;
