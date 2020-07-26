import { setSelectedSeasonId, setSelectedEventId } from './actions';
import { fetchSeason } from '../season/actions';

const loadSeasonData = (seasonId) => (dispatch) => {
    dispatch(setSelectedSeasonId(seasonId));
    dispatch(fetchSeason(seasonId));
};

const globalOperations = {
    loadSeasonData,
    setSelectedEventId,
    setSelectedSeasonId,
};

export {
    loadSeasonData,
    setSelectedEventId,
    setSelectedSeasonId,
};

export default globalOperations;
