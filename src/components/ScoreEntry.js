import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from '../Search';
import SortDropdown from '../SortDropdown';
import PlayerCard from '../PlayerCard';
import MatchScore from '../MatchScore';
import debounce from '../utils/debounce';

const Container = styled.div`
    display: flex;
`;

const PlayerContainer = styled.div`
    flex: 1;
    margin-right: ${props => props.theme.spacingLarge};
`;

const ScoreboardContainer = styled.div`
    width: 300px;
`;

const ScoreboardHeader = styled.div`
    height: 48px;
    display: flex;
    align-items: flex-end;
    margin-bottom: ${props => props.theme.spacingLarge};
`;

const Heading4 = styled.h3`
    font-size: 16px;
`;

const SearchSortContainer = styled.div`
    display: flex;
    margin-bottom: ${props => props.theme.spacingLarge};
`;

const StyledSearch = styled(Search)`
    flex: 1;
    margin-right: ${props => props.theme.spacingLarge};
`;

const PlayerCardStyled = styled(PlayerCard)`
    margin-bottom: ${props => props.theme.spacingLarge};
`;

const MatchScoreStyled = styled(MatchScore)`
    margin-bottom: ${props => props.theme.spacingLarge};
`;

class ScoreEntry extends Component {

    render() {
        const { players, setPlayerFilter } = this.props;

        return (
            <Container>
                <PlayerContainer>
                    <SearchSortContainer>
                        <StyledSearch onChange={debounce(setPlayerFilter, 250)} />
                        <SortDropdown />
                    </SearchSortContainer>
                    {players
                        .sort((a,b) => {
                            if(a.lastName < b.lastName) { return -1; }
                            if(a.lastName > b.lastName) { return 1; }
                            return 0;
                        })
                        .map(player => {
                            const { team } = player;
                            // const matchup = 
                            //     data.weeks.find(weekObj => weekObj.weekNumber === parseInt(week))
                            //     .matchups.find(matchup => {
                            //         return matchup.teamOne === player.teamId 
                            //             || matchup.teamTwo === player.teamId
                            //     }).matchupNumber;
                            const matchup = 1;
                            const week = 1;

                            return (
                                <Link
                                    to={`/scorecard/${week}/${matchup}`}
                                    key={player._id}>
                                    <PlayerCardStyled 
                                        key={player.id}
                                        name={player.fullName}
                                        teamNumber={team.number}
                                        teamColor={team.color}
                                        handicap={player.handicap}
                                    />
                                </Link>
                            );
                        }
                    )}
                </PlayerContainer>
                <ScoreboardContainer>
                    <ScoreboardHeader>
                        <Heading4>
                            Scoreboard
                        </Heading4>
                    </ScoreboardHeader>
                    <MatchScoreStyled 
                        teamOneNumber={3}
                        teamOneColor="green"
                        teamOnePlace="1st Place"
                        teamOnePoints={5.5}
                        teamTwoNumber={3}
                        teamTwoColor="red"
                        teamTwoPlace="7th Place"
                        teamTwoPoints={3.5}
                    />
                    <MatchScoreStyled 
                        teamOneNumber={3}
                        teamOneColor="blue"
                        teamOnePlace="1st Place"
                        teamOnePoints={5}
                        teamTwoNumber={3}
                        teamTwoColor="yellow"
                        teamTwoPlace="7th Place"
                        teamTwoPoints={7.5}
                    />
                    <MatchScoreStyled 
                        teamOneNumber={3}
                        teamOneColor="blue"
                        teamOnePlace="1st Place"
                        teamOnePoints={8}
                        teamTwoNumber={3}
                        teamTwoColor="purple"
                        teamTwoPlace="7th Place"
                        teamTwoPoints={4.5}
                    />
                    <MatchScoreStyled 
                        teamOneNumber={3}
                        teamOneColor="green"
                        teamOnePlace="1st Place"
                        teamOnePoints={4}
                        teamTwoNumber={3}
                        teamTwoColor="yellow"
                        teamTwoPlace="7th Place"
                        teamTwoPoints={3}
                    />
                    <MatchScoreStyled 
                        teamOneNumber={3}
                        teamOneColor="red"
                        teamOnePlace="1st Place"
                        teamOnePoints={5}
                        teamTwoNumber={3}
                        teamTwoColor="blue"
                        teamTwoPlace="7th Place"
                        teamTwoPoints={5.5}
                    />
                </ScoreboardContainer>
            </Container>
        );
    }
}

export default ScoreEntry;