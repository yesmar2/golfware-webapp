import {
    FETCH_NAMESPACE, FILTER_NAMESPACE,
} from './types';

const fetchPlayers = () => ({
    type: FETCH_NAMESPACE,
    meta: {
        async: true,
        blocking: true,
        path: '/players',
        method: 'GET',
    },
});

const setPlayerFilter = (filterText) => ({
    type: FILTER_NAMESPACE,
    payload: filterText,
});

export {
    fetchPlayers, setPlayerFilter,
};
