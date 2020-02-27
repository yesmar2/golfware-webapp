import React from 'react';
import styled from 'styled-components';
import {
    Switch, Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    CSSTransition, TransitionGroup,
} from 'react-transition-group';
import Home from './Home';
import Schedule from './Schedule';
import ScoreEntry from './containers/ScoreEntry';
import Scorecard from './Scorecard';
import Header from './Header';
import LeftDrawer from './LeftDrawer';
import PageHeader from './PageHeader';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { authSelectors } from './state/ducks/auth';

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Page = styled.main`
    width: 100%;
    margin-left: ${(props) => props.theme.leftDrawerWidth};
    margin-top: ${(props) => props.theme.headerHeight};
    padding: ${(props) => props.theme.spacingLarge};
`;

const StyledTransitionGroup = styled(TransitionGroup)`
    position: relative;

    .fade-enter {
        opacity: 0.01;
        transform: translateY(100px);
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: transform 300ms, opacity 200ms ease-in;
    }

    .fade-exit {
        opacity: 1;
        transform: translateY(0px);
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transform: translateY(100px);
        transition: transform 300ms, opacity 200ms ease-in;
    }
`;

const Content = styled(TransitionGroup)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const routes = [
    {
        key: 'home',
        path: '/',
        title: 'Home',
        component: Home,
    },
    {
        key: 'schedule',
        path: '/schedule',
        title: 'Schedule',
        component: Schedule,
    },
    {
        key: 'scoreentry',
        path: '/scoreentry/:week',
        title: 'Score Entry',
        component: ScoreEntry,
    },
    {
        key: 'scorecard',
        path: '/scorecard/:week/:matchupNumber',
        title: 'Score Entry / Matchup #1',
        component: Scorecard,
    },
];

const ProtectedApp = () => (
    <Container>
        <LeftDrawer />
        <Header />
        <Page>
            {routes.map((route) => (
                <Route
                    key={route.key}
                    path={route.path}
                    exact
                    render={() => <PageHeader title={route.title} />}
                />
            ))}
            <Route
                render={({ location }) => (
                    <StyledTransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={300}>
                            <Content>
                                <Switch location={location}>
                                    {routes.map((route) => (
                                        <Route
                                            key={route.key}
                                            path={route.path}
                                            exact
                                            component={route.component}
                                        />
                                    ))}
                                </Switch>
                            </Content>
                        </CSSTransition>
                    </StyledTransitionGroup>
                )}
            />
        </Page>
    </Container>
);

function App(props) {
    const {
        isAuthenticated, isVerifying,
    } = props;

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute
                component={ProtectedApp}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
            />
        </Switch>
    );
}

function mapStateToProps(appState) {
    return {
        isAuthenticated: authSelectors.selectIsAuthenticated(appState),
        isVerifying: authSelectors.selectIsVerifying(appState),
    };
}

export default connect(mapStateToProps)(App);
