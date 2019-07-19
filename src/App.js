import React from 'react';
import styled from 'styled-components';
import QuickEntry from './QuickEntry';
import Header from './Header';
import LeftDrawer from './LeftDrawer';

const Container = styled.div`
    display: flex;
    height: 100%;
`;

const Content = styled.main`
    width: 100%;
    margin-left: ${props => props.theme.leftDrawerWidth};
    margin-top: ${props => props.theme.headerHeight};
    padding: ${props => props.theme.spacingLarge};
`;

function App() {
    return (
        <Container>
            <LeftDrawer>
                
            </LeftDrawer>
            <Header>
                
            </Header>
            <Content>
                <QuickEntry />
            </Content>
        </Container>
    );
}

export default App;
