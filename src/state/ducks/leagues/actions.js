import {
    FETCH_NAMESPACE,
    ADD_NAMESPACE,
} from './types';

const fetchLeaguesByFirebaseID = (firebaseID) => ({
    type: FETCH_NAMESPACE,
    meta: {
        async: true,
        blocking: true,
        path: `/leagues/byFirebaseID/${firebaseID}`,
        method: 'GET',
    },
});

const addLeague = (payload) => ({
    type: ADD_NAMESPACE,
    meta: {
        async: true,
        blocking: true,
        path: '/league',
        method: 'POST',
        payload,
    },
});

export {
    fetchLeaguesByFirebaseID,
    addLeague,
};
