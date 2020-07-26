import { combineReducers } from 'redux';
import { DUCK_NAMESPACE, PLAYER_FILTER, PLAYER_FILTER_NAMESPACE } from './types';
import { buildApiMapReducer, createReducer } from '../../utils';

const initialDataState = {
    events: [],
    teams: [],
    league: {
        _id: null,
        name: null,
    },
};

const apiMapReducer = buildApiMapReducer(DUCK_NAMESPACE, initialDataState);
const playerFilterReducer = createReducer('')({ [PLAYER_FILTER_NAMESPACE]: (state, action) => action.payload });

export default combineReducers({
    ...apiMapReducer,
    [PLAYER_FILTER]: playerFilterReducer,
});
