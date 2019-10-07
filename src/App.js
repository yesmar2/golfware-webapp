import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";
import Home from './Home';
import ScoreEntry from './ScoreEntry';
import Scorecard from './Scorecard';
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
                <Route exact path="/" component={Home} />
                <Route exact path="/scoreentry/:week" component={ScoreEntry} />
                <Route exact path="/scorecard" component={Scorecard} />
            </Content>
        </Container>
    );
}

export default App;
