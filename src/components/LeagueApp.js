/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    Route,
    useLocation,
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiddleSection from '../ui/MiddleSection';
import LeagueSelectionHeader from './LeagueSelectionHeader';
import LeagueNav from './LeagueNav';
import ScoreEntryNav from './ScoreEntryNav';
import LeagueSelection from '../LeagueSelection';
import Dashboard from '../Dashboard';
import Schedule from '../Schedule';
import Players from '../Players';
import ScoreEntry from '../ScoreEntry';
import Scorecard from '../Scorecard';
import { seasonOperations } from '../state/ducks/seasons';
import golfer from '../images/golfer.jpg';

const Container = styled.div`

`;

const Main = styled.main`
    width: 100%;
    padding: ${(props) => props.theme.spacing(3)}px;
    transition: margin-top 200ms;
    transition-delay: 200ms;
    margin-top: ${(props) => (props.smallHeader ? props.theme.headerHeightSmall : props.theme.headerHeightBig)};
`;

const StyledTransitionGroup = styled(TransitionGroup)`
    position: relative;

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
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${(props) => (props.small ? props.theme.headerHeightSmall : props.theme.headerHeightBig)}
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

const routes = [
    {
        key: 'leagueSelection',
        path: '/leagues',
        component: LeagueSelection,
    },
    {
        key: 'dashboard',
        path: '/:seasonId/dashboard',
        component: Dashboard,
    },
    {
        key: 'schedule',
        path: '/:seasonId/schedule',
        component: Schedule,
    },
    {
        key: 'players',
        path: '/:seasonId/players',
        component: Players,
    },
    {
        key: 'scoreentry',
        path: '/:seasonId/scoreentry',
        component: ScoreEntry,
    },
    {
        key: 'scorecard',
        path: '/:seasonId/scorecard/:week/:matchupNumber',
        component: Scorecard,
    },
];

// TODO: find a more dynamic solution than this.
// can't use hooks inside a callback function
const useSmallHeader = () => {
    const scoreEntryMatch = useRouteMatch(routes.find((route) => route.key === 'scoreentry').path);
    const scorecardMatch = useRouteMatch(routes.find((route) => route.key === 'scorecard').path);

    if (scoreEntryMatch || scorecardMatch) {
        return true;
    }

    return false;
};

const LeagueHeader = () => {
    const { selectedSeasonId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(seasonOperations.fetchSeason(selectedSeasonId));
    }, [dispatch, selectedSeasonId]);

    return (
        <Switch>
            <Route path="/:selectedSeasonId/scoreentry">
                <ScoreEntryNav />
            </Route>
            <Route>
                <LeagueNav />
            </Route>
        </Switch>
    );
}

const LeagueApp = () => {
    const location = useLocation();
    const smallHeader = useSmallHeader();
    
    return (
        <Container>
            <Header small={smallHeader}>
                <MiddleSection>
                    <Switch>
                        <Route path="/leagues" exact>
                           <LeagueSelectionHeader />
                        </Route>
                        <Route path="/:selectedSeasonId">
                            <LeagueHeader />
                        </Route>
                    </Switch>
                </MiddleSection>
            </Header>
            <Main smallHeader={smallHeader}>
                <MiddleSection>
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
                </MiddleSection>
            </Main>
        </Container>
    );
};

export default LeagueApp;
