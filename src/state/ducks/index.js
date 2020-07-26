import { combineReducers } from 'redux';

import auth from './auth';
import leagues from './leagues';
import global from './global';
import season from './season';

export default combineReducers({
    ...leagues,
    ...auth,
    ...global,
    ...season,
});
