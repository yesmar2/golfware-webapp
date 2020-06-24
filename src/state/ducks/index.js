import { combineReducers } from 'redux';

import auth from './auth';
import leagues from './leagues';
import players from './players';
import events from './events';

export default combineReducers({
    ...players,
    ...leagues,
    ...auth,
    ...events,
});
