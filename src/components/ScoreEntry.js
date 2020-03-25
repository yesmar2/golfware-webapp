import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
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
    margin-right: ${(props) => props.theme.spacing(3)}px;
`;

const ScoreboardContainer = styled.div`
    width: 300px;
`;

const SearchSortContainer = styled.div`
    display: flex;
    margin-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const StyledSearch = styled(Search)`
    flex: 1;
    margin-right: ${(props) => props.theme.spacing(3)}px;
`;

const PlayerCardStyled = styled(PlayerCard)`
    margin-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const MatchScoreStyled = styled(MatchScore)`
    margin-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const ScoreEntry = memo((props) => {
    const { players, setPlayerFilter } = props;
    return (
        <Container>
            <PlayerContainer>
                <SearchSortContainer>
                    <StyledSearch onChange={debounce(setPlayerFilter, 250)} />
                    <SortDropdown />
                </SearchSortContainer>
                {/* TODO: move sort to redux */}
                {players
                    .sort((a, b) => {
                        if (a.lastName < b.lastName) {
                            return -1;
                        }
                        if (a.lastName > b.lastName) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((player) => {
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
                            <LazyLoad key={player._id} height={88} offset={400} once>
                                <Link to={`/scorecard/${week}/${matchup}`}>
                                    <PlayerCardStyled
                                        name={player.fullName}
                                        teamNumber={team.number}
                                        teamColor={team.color}
                                        handicap={player.handicap}
                                    />
                                </Link>
                            </LazyLoad>
                        );
                    })}
            </PlayerContainer>
            <ScoreboardContainer>
                <MatchScoreStyled
                    teamOneNumber={1}
                    teamOneColor="green"
                    teamOnePlace="1st Place"
                    teamOnePoints={5.5}
                    teamTwoNumber={10}
                    teamTwoColor="red"
                    teamTwoPlace="7th Place"
                    teamTwoPoints={3.5}
                />
                <MatchScoreStyled
                    teamOneNumber={2}
                    teamOneColor="blue"
                    teamOnePlace="1st Place"
                    teamOnePoints={5}
                    teamTwoNumber={9}
                    teamTwoColor="red"
                    teamTwoPlace="7th Place"
                    teamTwoPoints={7.5}
                />
                <MatchScoreStyled
                    teamOneNumber={3}
                    teamOneColor="blue"
                    teamOnePlace="1st Place"
                    teamOnePoints={8}
                    teamTwoNumber={8}
                    teamTwoColor="purple"
                    teamTwoPlace="7th Place"
                    teamTwoPoints={4.5}
                />
                <MatchScoreStyled
                    teamOneNumber={4}
                    teamOneColor="green"
                    teamOnePlace="1st Place"
                    teamOnePoints={4}
                    teamTwoNumber={7}
                    teamTwoColor="blue"
                    teamTwoPlace="7th Place"
                    teamTwoPoints={3}
                />
                <MatchScoreStyled
                    teamOneNumber={5}
                    teamOneColor="red"
                    teamOnePlace="1st Place"
                    teamOnePoints={5}
                    teamTwoNumber={6}
                    teamTwoColor="blue"
                    teamTwoPlace="7th Place"
                    teamTwoPoints={5.5}
                />
            </ScoreboardContainer>
        </Container>
    );
});

export default ScoreEntry;
