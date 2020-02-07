import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';
import SortDropdown from './SortDropdown';
import PlayerCard from './PlayerCard';
import MatchScore from './MatchScore';
import data from './data';
import { get } from './utils';

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
    state = {
        players: [],
        filteredPlayers: []
    }

    async componentDidMount() {
        const players = await get(`/api/players`) || [];
        
        const allPlayers = players.map(player => {
            return {
                ...player,
                fullName: `${player.firstName} ${player.lastName}`
            }
        });

        this.setState({
            allPlayers,
            filteredPlayers: allPlayers
        });
    }

    onChange = value => {
        const { allPlayers } = this.state;

        const filteredPlayers = allPlayers.filter(player => { 
            const fullName = player.fullName.toLowerCase();
            return fullName.indexOf(value.toLowerCase()) !== -1;
        })

        this.setState({ filteredPlayers })
    }

    render() {
        const { match } = this.props;
        const { params } = match;
        const { week } = params;
        const { filteredPlayers } = this.state;

        return (
            <Container>
                <PlayerContainer>
                    <SearchSortContainer>
                        <StyledSearch onChange={this.onChange} />
                        <SortDropdown />
                    </SearchSortContainer>
                    {filteredPlayers
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

                            return (
                                <Link to={`/scorecard/${week}/${matchup}`}>
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
