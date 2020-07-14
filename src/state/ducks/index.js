import { combineReducers } from 'redux';

import auth from './auth';
import leagues from './leagues';
import players from './players';
import events from './events';
import global from './global';
import seasons from './seasons';

export default combineReducers({
    ...players,
    ...leagues,
    ...auth,
    ...events,
    ...global,
    ...seasons,
});
