import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Schedule from './Schedule';
import ScoreEntry from './containers/ScoreEntry';
import Scorecard from './Scorecard';
import Header from './Header';
import LeftDrawer from './LeftDrawer';
import PageHeader from './PageHeader'; 
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';


const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Page = styled.main`
    width: 100%;
    margin-left: ${props => props.theme.leftDrawerWidth};
    margin-top: ${props => props.theme.headerHeight};
    padding: ${props => props.theme.spacingLarge};
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
        component: Home
    },
    {
        key: 'schedule',
        path: '/schedule',
        title: 'Schedule',
        component: Schedule
    },
    {
        key: 'scoreentry',
        path: '/scoreentry/:week',
        title: 'Score Entry',
        component: ScoreEntry
    },
    {
        key: 'scorecard',
        path: '/scorecard/:week/:matchupNumber',
        title: 'Score Entry / Matchup #1',
        component: Scorecard
    }
];

function App() {
    return (
        <Container>
            <LeftDrawer />
            <Header />
            <Page>
                {routes.map(route => (
                    <Route
                        key={route.key}
                        path={route.path}
                        exact
                        render={() => (
                            <PageHeader title={route.title} />
                        )}
                    />
                ))}
                <Route render={({location}) => (
                    <StyledTransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={300}
                        >
                            <Content>
                                <Switch location={location}>
                                    {routes.map(route => (
                                        <Route
                                            key={route.key}
                                            path={route.path}
                                            component={route.component}
                                            exact
                                        />
                                    ))}
                                </Switch>
                            </Content>
                        </CSSTransition>
                    </StyledTransitionGroup>
                )} />
            </Page>
        </Container>
    );
}

export default App;
