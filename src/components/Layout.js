import React from 'react';
import styled from 'styled-components';
import {
    Switch,
    Route,
    useLocation,
    useRouteMatch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiddleSection from '../ui/MiddleSection';
import Header from './Header';
import Dashboard from '../Dashboard';
import Schedule from '../Schedule';
import ScoreEntry from '../containers/ScoreEntry';
import Scorecard from '../Scorecard';

const Container = styled.div`
    height: 100%;
`;

const Main = styled.main`
    width: 100%;
    padding: ${(props) => props.theme.spacing(3)}px;
    transition: margin-top 200ms;
    transition-delay: 200ms;
    margin-top: ${(props) => (props.smallHeader ? props.theme.headerHeightSmall : props.theme.headerHeightBig)}
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
        transition-delay: 500ms;
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
        key: 'dashboard',
        path: '/',
        component: Dashboard,
    },
    {
        key: 'schedule',
        path: '/schedule',
        component: Schedule,
    },
    {
        key: 'scoreentry',
        path: '/scoreentry',
        component: ScoreEntry,
    },
    {
        key: 'scorecard',
        path: '/scorecard/:week/:matchupNumber',
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

const Layout = () => {
    const location = useLocation();
    const smallHeader = useSmallHeader();

    return (
        <Container>
            <Header small={smallHeader} />
            <Main smallHeader={smallHeader}>
                <MiddleSection>
                    <StyledTransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={800}>
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

export default Layout;
