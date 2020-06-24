import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import MiddleSection from '../ui/MiddleSection';
import LeagueNav from './LeagueNav';
import ScoreEntryNav from './ScoreEntryNav';
import golfer from '../images/golfer.jpg';

const Container = styled.header`
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

const CSSTransitionStyled = styled(CSSTransition)`
    position: absolute;
`;

const Header = ({ small }) => (
    <Container small={small}>
        <MiddleSection>
            <CSSTransitionStyled in={!small} timeout={500} classNames="fade" unmountOnExit>
                <LeagueNav />
            </CSSTransitionStyled>
            <CSSTransitionStyled in={small} timeout={500} classNames="fade" unmountOnExit>
                <ScoreEntryNav />
            </CSSTransitionStyled>
        </MiddleSection>
    </Container>
);

export default Header;
