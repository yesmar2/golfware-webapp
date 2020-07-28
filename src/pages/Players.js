import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { seasonOperations, seasonSelectors } from '../state/ducks/season';
import Search from '../components/Search';
import SortDropdown from '../components/SortDropdown';
import PlayerCard from '../components/PlayerCard';
import Skeleton from '../ui/Skeleton';
import debounce from '../utils/debounce';

const Container = styled.div`
    
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

const SkeletonStyled = styled(Skeleton)`
    height: 64px;
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const ScoreEntry = () => {
    const players = useSelector(seasonSelectors.selectFilteredPlayers);
    const hasLoaded = useSelector(seasonSelectors.selectHasLoaded);
    const dispatch = useDispatch();

    const setPlayerFilter = (value) => {
        dispatch(seasonOperations.setPlayerFilter(value));
    };

    return (
        <Container>
            <SearchSortContainer>
                <StyledSearch onChange={debounce(setPlayerFilter, 250)} />
                <SortDropdown />
            </SearchSortContainer>
            {/* TODO: move sort to redux */}
            {(!hasLoaded ? Array.from(new Array(10)) : players)
                // .sort((a, b) => {
                //     if (a.lastName < b.lastName) {
                //         return -1;
                //     }
                //     if (a.lastName > b.lastName) {
                //         return 1;
                //     }
                //     return 0;
                // })
                .map((player, index) => {
                    if (!player) {
                        // eslint-disable-next-line react/no-array-index-key
                        return <SkeletonStyled key={index} />;
                    }

                    const matchup = 1;
                    const week = 1;

                    return (
                        <LazyLoad key={player._id} height={88} offset={400} once>
                            <Link to={`/scorecard/${week}/${matchup}`}>
                                <PlayerCardStyled
                                    name={player.fullName}
                                    teamNumber={player.teamNumber}
                                    teamColor={player.teamColor}
                                    handicap={player.handicap}
                                />
                            </Link>
                        </LazyLoad>
                    );
                })}
        </Container>
    );
};

export default ScoreEntry;
