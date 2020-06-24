import { combineReducers } from 'redux';
import { DUCK_NAMESPACE } from './types';
import {
    buildApiMapReducer,
} from '../../utils';

const apiMapReducer = buildApiMapReducer(DUCK_NAMESPACE);

export default combineReducers({
    ...apiMapReducer,
});
