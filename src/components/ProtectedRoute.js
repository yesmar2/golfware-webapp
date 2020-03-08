import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../state/ducks/auth';

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

function mapStateToProps(appState) {
    return {
        isAuthenticated: authSelectors.selectIsAuthenticated(appState),
        isVerifying: authSelectors.selectIsVerifying(appState),
    };
}

export default connect(mapStateToProps)(ProtectedRoute);
