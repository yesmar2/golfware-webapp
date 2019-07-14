import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: ${props => props.theme.leftDrawerWidth};
    border-right: 1px solid  ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacingLarge};
`;

const Heading = styled.h1`
    font-size: 24px;
    font-weight: normal;
`;


const LeftDrawer = props => {
    return (
        <Container>
            <Heading>
                Golfware
            </Heading>
        </Container>
    );
}

export default LeftDrawer;