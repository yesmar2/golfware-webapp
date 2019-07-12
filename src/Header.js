import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    left: ${props => props.theme.leftDrawerWidth};
    right: 0;
    height: ${props => props.theme.headerHeight};
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: ${props => props.theme.spacingMedium};
`;

const Header = props => {
    return (
        <Container>
            Monday Night Men's League
        </Container>
    );
}

export default Header;