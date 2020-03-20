import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerOperations, playerSelectors } from '../state/ducks/players';
import ScoreEntry from '../components/ScoreEntry';

const ScoreEntryContainer = () => {
    const players = useSelector(playerSelectors.selectFilteredPlayers);
    const success = useSelector(playerSelectors.selectSuccess);
    const dispatch = useDispatch();

    const setPlayerFilter = (value) => {
        console.log('value', value);
        dispatch(playerOperations.setPlayerFilter(value));
    };

    useEffect(() => {
        if (!success) {
            dispatch(playerOperations.fetchPlayers());
        }
    }, [dispatch, success]);

    return (
        <ScoreEntry
            players={players}
            setPlayerFilter={setPlayerFilter}
        />
    );
};

export default ScoreEntryContainer;
