import { createReducer } from '../../utils';

import {
    SET_ACTIVE_LEAGUE_ID,
} from './types';

const initialState = {
    selectedLeagueId: null,
};

const globalReducer = createReducer(initialState)({
    [SET_ACTIVE_LEAGUE_ID]: (state, action) => ({
        ...state,
        selectedLeagueId: action.selectedLeagueId,
    }),
});

export default globalReducer;
