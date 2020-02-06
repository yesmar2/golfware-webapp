import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FaUsers, FaUser, FaGolfBall } from 'react-icons/fa';
import MenuItem from './MenuItem';
import golfer from './images/golfer.jpg'

const Container = styled.nav`
    position: fixed;
    height: 100%;
    width: ${props => props.theme.leftDrawerWidth};
    background:
        linear-gradient(
            ${props => props.theme.colors.green}e6,
            ${props => props.theme.colors.green}e6
        ),
        url(${golfer}) no-repeat 38%;
    background-size: cover;
`;

const AppName = styled.div`
    padding-left: ${props => props.theme.spacingLarge};
    border-bottom: 1px solid rgba(256, 256, 256 ,0.5);
    height: ${props => props.theme.headerHeight};
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
    font-size: 24px;
    font-weight: normal;
    color: #fff;
`;

const Menu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: ${props => props.theme.spacingMedium} 0;
`;

const LeftDrawer = props => {
    return (
        <Container>
            <AppName>
                <Link to="/">
                    <Heading>
                        Golfware
                    </Heading>
                </Link>
            </AppName>
            <Menu>
                <MenuItem
                    href="/scoreentry/1"
                    icon={<FaGolfBall />}
                    text="Score Entry" />
                <MenuItem
                    href="/teams"
                    icon={<FaUsers />}
                    text="Teams" />
                <MenuItem
                    href="/players"
                    icon={<FaUser />}
                    text="Players" />
            </Menu>
        </Container>
    );
}

export default LeftDrawer;