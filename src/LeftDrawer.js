import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: ${props => props.theme.leftDrawerWidth};
    border-right: 1px solid black;
    padding: ${props => props.theme.spacingMedium};
`;

const LeftDrawer = props => {
    return (
        <Container>
            Golfware
        </Container>
    );
}

export default LeftDrawer;