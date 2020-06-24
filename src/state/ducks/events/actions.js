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

export { fetchEvents };
