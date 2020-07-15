import {
    FETCH_NAMESPACE,
    PLAYER_FILTER_NAMESPACE,
} from './types';

const fetchSeason = (seasonId) => ({
    type: FETCH_NAMESPACE,
    meta: {
        async: true,
        blocking: true,
        path: `/season/${seasonId}`,
        method: 'GET',
    },
});

const setPlayerFilter = (filterText) => ({
    type: PLAYER_FILTER_NAMESPACE,
    payload: filterText,
});

export {
    fetchSeason,
    setPlayerFilter,
};
