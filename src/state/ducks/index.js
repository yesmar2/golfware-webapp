import { combineReducers } from "redux";

import auth from './auth';
import players from './players';

export default combineReducers({
    ...players,
    ...auth
});
