import React, { Component } from 'react';
import styled from 'styled-components';
import PlayerScoreEntry from './PlayerScoreEntry';

const Container = styled.div`
    
`;

class Scorecard extends Component {
    render() {
        return (
            <Container>
                <PlayerScoreEntry />
                <PlayerScoreEntry />
            </Container>
        );
    }
}

export default Scorecard;
