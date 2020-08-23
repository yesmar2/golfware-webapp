import React from 'react';
import styled from 'styled-components';
import {
    Switch,
    Route,
    useLocation,
    matchPath,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LeagueSelection from '../pages/LeagueSelection';
import LeagueWizard from '../pages/LeagueWizard';
import Dashboard from '../pages/Dashboard';
import Schedule from '../pages/Schedule';
import Players from '../pages/Players';
import ScoreEntry from '../pages/ScoreEntry';
import Scorecard from '../pages/Scorecard';
import LeagueHeader from './LeagueHeader';
import LeagueSelectionHeader from './LeagueSelectionHeader';
import FormHeader from './FormHeader';
import golfer from '../images/golfer.jpg';

const middleSectionStyles = `
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
`;

const Main = styled.main`
    width: 100%;
    height: calc(100vh - ${(props) => (props.largeHeader ? props.theme.headerHeightBig : props.theme.headerHeightSmall)});
    padding: ${(props) => props.theme.spacing(3)}px;
    transition: margin-top 200ms;
    transition-delay: 200ms;
    margin-top: ${(props) => (props.largeHeader ? props.theme.headerHeightBig : props.theme.headerHeightSmall)};
`;

const StyledTransitionGroup = styled(TransitionGroup)`
    ${middleSectionStyles}
    
    .page-enter {
        opacity: 0.01;
        transform: translateY(100px);
    }

    .page-enter.page-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: transform 300ms, opacity 200ms ease-in;
        transition-delay: 500ms;
    }

    .page-exit {
        opacity: 1;
        transform: translateY(0px);
    }

    .page-exit.page-exit-active {
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
    height: 100%;
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => (props.large ? props.theme.headerHeightBig : props.theme.headerHeightSmall)}
    background: linear-gradient(
            ${(props) => props.theme.palette.green}dd,
            ${(props) => props.theme.palette.green}dd
        ),
        url(${golfer}) no-repeat 50% 36%;
    background-size: cover;
    transition: height 200ms;
    z-index: 1;

    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition:opacity 500ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 200ms ease-in;
    }
`;

const InnerHeader = styled.div`
    ${middleSectionStyles}
`;

const routes = [
    {
        key: 'leagueSelection',
        path: '/leagues',
        component: LeagueSelection,
    },
    {
        key: 'leagueWizard',
        path: '/league-wizard',
        component: LeagueWizard,
    },
    {
        key: 'dashboard',
        path: '/:selectedSeasonId/dashboard',
        component: Dashboard,
        largeHeader: true,
    },
    {
        key: 'schedule',
        path: '/:selectedSeasonId/schedule',
        component: Schedule,
        largeHeader: true,
    },
    {
        key: 'players',
        path: '/:selectedSeasonId/players',
        component: Players,
        largeHeader: true,
    },
    {
        key: 'scoreentry',
        path: '/:selectedSeasonId/scoreentry/:selectedEventId',
        component: ScoreEntry,
    },
    {
        key: 'scorecard',
        path: '/:selectedSeasonId/scorecard/:week/:matchupNumber',
        component: Scorecard,
    },
];

const useLargeHeader = () => {
    const location = useLocation();
    return routes
        .filter((route) => route.largeHeader)
        .some((largeHeaderRoute) => matchPath(location.pathname, { path: largeHeaderRoute.path }));
};

const LeagueApp = () => {
    const location = useLocation();
    const largeHeader = useLargeHeader();

    return (
        <>
            <Header large={largeHeader}>
                <InnerHeader>
                    <Switch>
                        <Route path="/leagues" exact>
                            <LeagueSelectionHeader />
                        </Route>
                        <Route path="/league-wizard" exact>
                            <FormHeader title="Create a new league" />
                        </Route>
                        <Route path="/:selectedSeasonId">
                            <LeagueHeader />
                        </Route>
                    </Switch>
                </InnerHeader>
            </Header>
            <Main largeHeader={largeHeader}>
                <StyledTransitionGroup>
                    <CSSTransition key={location.key} classNames="page" timeout={800}>
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
            </Main>
        </>
    );
};

export default LeagueApp;
