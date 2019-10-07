import React from 'react';
import styled from 'styled-components'
import { FaCog } from 'react-icons/fa';

const Container = styled.header`
    position: fixed;
    left: ${props => props.theme.leftDrawerWidth};
    right: 0;
    height: ${props => props.theme.headerHeight};
    display: flex;
    align-items: center;
    padding-left: ${props => props.theme.spacingLarge};
    padding-right: ${props => props.theme.spacingLarge};
`;

const Heading = styled.h2`
    font-size: 18px;
    font-weight: 600;
    flex: 1;
`;

const HeaderIcons = styled.div`
    font-size: 18px;
`;

const Header = props => {
    return (
        <Container>
            <Heading>Monday Night Men's League</Heading>
            <HeaderIcons>
                <FaCog />
            </HeaderIcons>
        </Container>
    );
}

export default Header;