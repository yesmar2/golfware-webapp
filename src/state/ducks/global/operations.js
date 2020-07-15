import { setSelectedSeasonId } from './actions';
import { fetchSeason } from '../season/actions';

const loadLeagueSeasonData = (seasonId) => (dispatch) => {
    dispatch(setSelectedSeasonId(seasonId));
    dispatch(fetchSeason(seasonId));
};

const globalOperations = {
    setSelectedSeasonId,
    loadLeagueSeasonData,
};

export {
    setSelectedSeasonId,
    loadLeagueSeasonData,
};

export default globalOperations;
