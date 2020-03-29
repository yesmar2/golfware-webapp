import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MiddleSection from '../ui/MiddleSection';
import { ReactComponent as Logo } from '../images/golfware-logo-white.svg';
import golfer from '../images/golfer.jpg';

const Container = styled.div`
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
    transition: height 200ms ease-out;
    z-index: 1;
`;

const LeagueHeader = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Heading = styled.h2`
    font-size: 30px;
    font-weight: normal;
    flex: 1;
    color: ${(props) => props.theme.palette.grey[100]};
`;

const LogoContainer = styled.div`
    position: absolute;
    width: 72px;
    left: -96px;
    border-right: 1px solid rgba(256, 256, 256, 0.7);
    transition: left 200ms, width 200ms;
`;

const LogoStyled = styled(Logo)`
    height: 48px;
    width:  48px;
    transition: height 200ms, width: 200ms;
`;

const Nav = styled.nav`
    position: absolute;
    bottom: 0;
`;

const TabStyled = styled(Tab)`
    padding: ${(props) => props.theme.spacing(2)}px ${(props) => props.theme.spacing(3)}px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
`;

const Header = ({ small }) => {
    const location = useLocation();
    return (
        <Container small={small}>
            <MiddleSection>
                <LeagueHeader>
                    <LogoContainer>
                        <LogoStyled />
                    </LogoContainer>
                    <Heading>Bemus Point Monday Night Men&apos;s League</Heading>
                    {!small && (
                        <Nav>
                            <Tabs value={location.pathname}>
                                <TabStyled label="Dashboard" component={NavLink} to="/dashboard" value="/dashboard" />
                                <TabStyled label="Schedule" component={NavLink} to="/schedule" value="/schedule" />
                                <TabStyled label="Teams" component={NavLink} to="/teams" value="/teams" />
                            </Tabs>
                        </Nav>
                    )}
                </LeagueHeader>
            </MiddleSection>
        </Container>
    );
};

export default Header;
