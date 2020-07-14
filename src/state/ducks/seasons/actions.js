import {
    FETCH_NAMESPACE,
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

export {
    fetchSeason,
};
