import {
    SET_SELECTED_EVENT_ID,
    SET_SELECTED_SEASON_ID,
} from './types';

const setSelectedSeasonId = (selectedSeasonId) => ({
    type: SET_SELECTED_SEASON_ID,
    selectedSeasonId,
});

const setSelectedEventId = (selectedEventId) => ({
    type: SET_SELECTED_EVENT_ID,
    selectedEventId,
});


export {
    setSelectedEventId,
    setSelectedSeasonId,
};
