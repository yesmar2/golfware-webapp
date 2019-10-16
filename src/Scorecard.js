import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import PlayerScoreEntry from './PlayerScoreEntry';
import PlayerCard from './PlayerCard';

const Container = styled(Paper)`
    margin-bottom: ${props => props.theme.spacingHuge};
`;

const PlayerCardStyled = styled(PlayerCard)`
    margin-bottom: ${props => props.theme.spacingLarge};
`;

const StyledPlayerScoreEntry = styled(PlayerScoreEntry)`
    border-bottom: ${props => props.theme.defaultBorder};

    &:last-child {
        border: none;
    }
`;

const Heading3 = styled.h3`
    margin-bottom: ${props => props.theme.spacingMedium};
`;

class Scorecard extends Component {
    render() {
        return (
            <React.Fragment>
                <Heading3>
                    Build a scorecard
                </Heading3>
                <Container>
                    <StyledPlayerScoreEntry
                        teamColor="red"
                        teamNumber="1"
                        name="Ramsey Bland"
                        handicap={5}
                    />
                </Container>
                <Heading3>Select an opponent</Heading3>
                <PlayerCardStyled 
                    name="Richard Bland"
                    teamNumber="3"
                    teamColor="blue"
                    handicap="11"
                />
                <PlayerCardStyled 
                    name="Earl Johnson"
                    teamNumber="3"
                    teamColor="blue"
                    handicap="18"
                />
                <PlayerCardStyled 
                    name="Barry Anderson"
                    teamNumber="3"
                    teamColor="blue"
                    handicap="6"
                />
                <PlayerCardStyled 
                    name="Jamie Henderson"
                    teamNumber="3"
                    teamColor="blue"
                    handicap="5"
                />
            </React.Fragment>
            
        );
    }
}

export default Scorecard;
