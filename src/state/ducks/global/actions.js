import {
    SET_SELECTED_SEASON_ID,
} from './types';

const setSelectedSeasonId = (selectedSeasonId) => ({
    type: SET_SELECTED_SEASON_ID,
    selectedSeasonId,
});

export {
    setSelectedSeasonId,
};
