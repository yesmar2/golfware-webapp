import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { playerOperations, playerSelectors } from './state/ducks/players';
import Search from './Search';
import SortDropdown from './SortDropdown';
import PlayerCard from './PlayerCard';
import Skeleton from './ui/Skeleton';
import debounce from './utils/debounce';

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
    const players = useSelector(playerSelectors.selectFilteredPlayers);
    const success = useSelector(playerSelectors.selectSuccess);
    const hasLoaded = useSelector(playerSelectors.selectHasLoaded);
    const dispatch = useDispatch();

    const setPlayerFilter = (value) => {
        dispatch(playerOperations.setPlayerFilter(value));
    };

    useEffect(() => {
        if (!success) {
            dispatch(playerOperations.fetchPlayers());
        }
    }, [dispatch, success]);

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
                .map((player) => {
                    if (!player) {
                        return <SkeletonStyled />;
                    }

                    const { team } = player;
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
        </Container>
    );
};

export default ScoreEntry;
