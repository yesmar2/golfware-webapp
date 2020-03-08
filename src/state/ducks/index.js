import { combineReducers } from 'redux';

import auth from './auth';
import leagues from './leagues';
import players from './players';

export default combineReducers({
    ...players,
    ...leagues,
    ...auth,
});
