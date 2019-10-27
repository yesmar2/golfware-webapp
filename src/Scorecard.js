import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import PlayerScoreEntry from './PlayerScoreEntry';
import ScorecardCell from './ScorecardCell';
import data from './data';

const Container = styled(Paper)`
    margin-bottom: ${props => props.theme.spacingHuge};
`;

const ScorecardHeader = styled.div`
    display: flex;
`;

const Heading3 = styled.h3`
    flex: 1;
    margin-bottom: ${props => props.theme.spacingLarge};
`;

const StyledPlayerScoreEntry = styled(PlayerScoreEntry)`
    border-bottom: ${props => props.theme.defaultBorder};

    &:last-child {
        border: none;
    }
`;

const ScorecardHeaderCell = styled(ScorecardCell)`
    font-weight: 600;
`;

class Scorecard extends Component {
    render() {

        const { match } = this.props;
        const { params } = match;
        const { week, matchupNumber } = params;

        const matchup = 
            data.weeks.find(weekObj => weekObj.weekNumber === parseInt(week))
            .matchups.find(matchup => matchup.matchupNumber === parseInt(matchupNumber))

        return (
            <React.Fragment>
                <ScorecardHeader>
                    <Heading3>
                        Scorecard #1
                    </Heading3>
                    <ScorecardHeaderCell>1</ScorecardHeaderCell>
                    <ScorecardHeaderCell>2</ScorecardHeaderCell>
                    <ScorecardHeaderCell>3</ScorecardHeaderCell>
                    <ScorecardHeaderCell>4</ScorecardHeaderCell>
                    <ScorecardHeaderCell>5</ScorecardHeaderCell>
                    <ScorecardHeaderCell>6</ScorecardHeaderCell>
                    <ScorecardHeaderCell>7</ScorecardHeaderCell>
                    <ScorecardHeaderCell>8</ScorecardHeaderCell>
                    <ScorecardHeaderCell>9</ScorecardHeaderCell>
                    <ScorecardHeaderCell>T</ScorecardHeaderCell>
                    <ScorecardHeaderCell>P</ScorecardHeaderCell>
                </ScorecardHeader>
                <Container>
                    {/* {Object.values(matchup.scorecardOne).map(playerScorecard => {
                        const player = data.players.find(player => )
                        return (
                            <StyledPlayerScoreEntry
                                teamColor="red"
                                teamNumber="1"
                                name="Ramsey Bland"
                                handicap={5}
                            />
                        );
                    })} */}
                     <StyledPlayerScoreEntry
                            teamColor="red"
                            teamNumber="1"
                            name="Ramsey Bland"
                            handicap={5}
                        />
                    <StyledPlayerScoreEntry
                        teamColor="blue"
                        teamNumber="3"
                        name="Richard Bland"
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
                {/* <Heading3>Select an opponent</Heading3>
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
                /> */}
            </React.Fragment>
            
        );
    }
}

export default Scorecard;
