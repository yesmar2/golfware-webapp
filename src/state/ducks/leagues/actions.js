import {
    FETCH_NAMESPACE,
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

export {
    fetchLeaguesByFirebaseID,
};
