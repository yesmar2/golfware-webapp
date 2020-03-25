import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ReactComponent as Logo } from './images/golfware-logo-white.svg';

const Container = styled.header`
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
    width: 75px;
    left: -100px;
    border-right: 1px solid rgba(256, 256, 256, 0.7);
`;

const LogoStyled = styled(Logo)`
    height: 50px;
    width: 50px;
`;

const Nav = styled.nav`
    position: absolute;
    bottom: 0;
`;

// const Menu = styled.div`
//     display: flex;
// `;

const TabStyled = styled(Tab)`
    padding: ${(props) => props.theme.spacing(2)}px ${(props) => props.theme.spacing(3)}px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
`;

const LeagueHeader = () => {
    const location = useLocation();
    return (
        <Container>
            <LogoContainer>
                <LogoStyled />
            </LogoContainer>
            <Heading>Bemus Point Monday Night Men&apos;s League</Heading>
            <Nav>
                <Tabs value={location.pathname}>
                    <TabStyled label="Score Entry" component={NavLink} to="/scoreentry/1" value="/scoreentry/1" />
                    <TabStyled label="Schedule" component={NavLink} to="/schedule" value="/schedule" />
                    <TabStyled label="Teams" component={NavLink} to="/teams" value="/teams" />
                </Tabs>
                {/* <Menu>
                    <MenuItemLink to="/scoreentry/1">Score Entry</MenuItemLink>
                    <MenuItemLink to="/schedule">Schedule</MenuItemLink>
                    <MenuItemLink to="/teams">Teams</MenuItemLink>
                    <MenuItemLink to="/players">Players</MenuItemLink>
                </Menu> */}
            </Nav>
        </Container>
    );
};

export default LeagueHeader;
