import React from 'react';
import styled from 'styled-components'

const Container = styled.header`
    position: fixed;
    left: ${props => props.theme.leftDrawerWidth};
    right: 0;
    height: ${props => props.theme.headerHeight};
    display: flex;
    align-items: center;
    padding-left: ${props => props.theme.spacingLarge};
    background: ${props => props.theme.colors.green};
    color: #fff;
`;

const Heading = styled.h2`
    font-size: 18px;
    font-weight: 600;
`;


const Header = props => {
    return (
        <Container>
            <Heading>Monday Night Men's League</Heading>
        </Container>
    );
}

export default Header;