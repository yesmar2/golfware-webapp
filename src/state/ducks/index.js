import { combineReducers } from 'redux';

import auth from './auth';
import leagues from './leagues';
import players from './players';
import global from './global';
import season from './season';

export default combineReducers({
    ...players,
    ...leagues,
    ...auth,
    ...global,
    ...season,
});
