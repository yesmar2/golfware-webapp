import React from 'react';
import styled, { css } from 'styled-components';
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
    color: ${(props) => props.theme.colors.grey[100]};
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

const Menu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const MenuItem = styled.li`
    padding: ${(props) => props.theme.spacingMedium} ${(props) => props.theme.spacingLarge};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    ${(props) => props.active && css`
        border-bottom: 2px solid  ${props.theme.colors.red};
    `}
`;

const LeagueHeader = () => (
    <Container>
        <LogoContainer>
            <LogoStyled />
        </LogoContainer>
        <Heading>Bemus Point Monday Night Men&apos;s League</Heading>
        <Nav>
            <Menu>
                <MenuItem active>Score Entry</MenuItem>
                <MenuItem>Schedule</MenuItem>
                <MenuItem>Teams</MenuItem>
                <MenuItem>Players</MenuItem>
            </Menu>
        </Nav>
    </Container>
);

export default LeagueHeader;
