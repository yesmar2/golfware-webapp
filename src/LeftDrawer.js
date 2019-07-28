import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FaGolfBall } from 'react-icons/fa';
import MenuItem from './MenuItem';

const Container = styled.nav`
    position: fixed;
    height: 100%;
    width: ${props => props.theme.leftDrawerWidth};
    border-right: 1px solid  ${props => props.theme.colors.grey[200]};
    background: #fff;
`;

const AppName = styled.div`
    padding-left: ${props => props.theme.spacingLarge};
    border-bottom: 1px solid  ${props => props.theme.colors.grey[200]};
    height: ${props => props.theme.headerHeight};
    display: flex;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 24px;
    font-weight: normal;
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
                    href="/quickentry"
                    icon={<FaGolfBall />}
                    text="Quick Entry" />
                <MenuItem
                    href="/teams"
                    icon={<FaGolfBall />}
                    text="Teams" />
                <MenuItem
                    href="/players"
                    icon={<FaGolfBall />}
                    text="Players" />
            </Menu>
        </Container>
    );
}

export default LeftDrawer;