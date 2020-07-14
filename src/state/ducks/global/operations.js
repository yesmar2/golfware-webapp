import { setSelectedSeasonId } from './actions';
import { fetchSeason } from '../seasons/actions';

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
