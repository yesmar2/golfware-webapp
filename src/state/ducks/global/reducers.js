import { createReducer } from '../../utils';

import {
    SET_SELECTED_SEASON_ID,
} from './types';

const initialState = {
    selectedSeasonId: null,
};

const globalReducer = createReducer(initialState)({
    [SET_SELECTED_SEASON_ID]: (state, action) => ({
        ...state,
        selectedSeasonId: action.selectedSeasonId,
    }),
});

export default globalReducer;
