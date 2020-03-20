import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiddleSection from '../ui/MiddleSection';
import Home from '../Home';
import Schedule from '../Schedule';
import ScoreEntry from '../containers/ScoreEntry';
import Scorecard from '../Scorecard';
import LeagueHeader from '../LeagueHeader';
// import PageHeader from '../PageHeader';
import golfer from '../images/golfer.jpg';

const Container = styled.div`
    height: 100%;
`;

const Header = styled.div`
    height: 200px;
    background: linear-gradient(
            ${(props) => props.theme.palette.green}dd,
            ${(props) => props.theme.palette.green}dd
        ),
        url(${golfer}) no-repeat 50% 36%;
    background-size: cover;
`;

const Main = styled.main`
    width: 100%;
    padding: ${(props) => props.theme.spacing(3)}px;
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
        <Header>
            <MiddleSection>
                <LeagueHeader />
            </MiddleSection>
        </Header>
        <Main>
            <MiddleSection>
                {/* {routes.map((route) => (
                    <Route
                        key={route.key}
                        path={route.path}
                        exact
                        render={() => <PageHeader title={route.title} />}
                    />
                ))} */}
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
            </MiddleSection>
        </Main>
    </Container>
);

export default ProtectedApp;
