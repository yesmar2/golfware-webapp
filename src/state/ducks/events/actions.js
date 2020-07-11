import { FETCH_NAMESPACE } from './types';

const fetchEvents = () => ({
    type: FETCH_NAMESPACE,
    meta: {
        async: true,
        blocking: true,
        path: '/events',
        method: 'GET',
    },
});

const fetchEventsBySeasonId = (seasonId) => ({
    type: FETCH_NAMESPACE,
    meta: {
        async: true,
        blocking: true,
        path: `/events/${seasonId}`,
        method: 'GET',
    },
});

export { fetchEvents, fetchEventsBySeasonId };
