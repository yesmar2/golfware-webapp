import { createReducer } from '../../utils';
import {
    SET_SELECTED_EVENT_ID,
    SET_SELECTED_SEASON_ID,
} from './types';

const initialState = {
    selectedSeasonId: null,
    selectedEventId: null,
};

const globalReducer = createReducer(initialState)({
    [SET_SELECTED_SEASON_ID]: (state, action) => ({
        ...state,
        selectedSeasonId: action.selectedSeasonId,
    }),
    [SET_SELECTED_EVENT_ID]: (state, action) => ({
        ...state,
        selectedEventId: action.selectedEventId,
    }),
});

export default globalReducer;
