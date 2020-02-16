import { get } from './utils';

const fetchPlayers = async () => {
    return await get(`/api/players`) || [];
}

export { fetchPlayers };