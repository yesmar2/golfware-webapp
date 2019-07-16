import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: ${props => props.theme.leftDrawerWidth};
    border-right: 1px solid  ${props => props.theme.colors.grey[200]};
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


const LeftDrawer = props => {
    return (
        <Container>
            <AppName>
                <Heading>
                    Golfware
                </Heading>
            </AppName>
        </Container>
    );
}

export default LeftDrawer;