import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import PlayerScoreEntry from './PlayerScoreEntry';

const Container = styled(Paper)`
    
`;

const StyledPlayerScoreEntry = styled(PlayerScoreEntry)`
    border-bottom: ${props => props.theme.defaultBorder};

    &:last-child {
        border: none;
    }
`;

class Scorecard extends Component {
    render() {
        return (
            <Container>
                <StyledPlayerScoreEntry
                    teamColor="red"
                    teamNumber="1"
                    name="Ramsey Bland"
                    handicap={5}
                />
                <StyledPlayerScoreEntry
                    teamColor="blue"
                    teamNumber="3"
                    name="Rick Bland"
                    handicap={11}
                />
                <StyledPlayerScoreEntry
                    teamColor="red"
                    teamNumber="1"
                    name="Ross Bland"
                    handicap={6}
                />
                <StyledPlayerScoreEntry
                    teamColor="blue"
                    teamNumber="3"
                    name="Earl Johnson"
                    handicap={18}
                />
            </Container>
        );
    }
}

export default Scorecard;
