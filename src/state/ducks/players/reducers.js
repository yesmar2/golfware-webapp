import { combineReducers } from "redux";
import {
    DUCK_NAMESPACE,
    FILTER,
    FILTER_NAMESPACE
}
from "./types";
import {
    createReducer,
    buildApiMapReducer,
} from "../../utils";

const apiMapReducer = buildApiMapReducer(DUCK_NAMESPACE);

const playerFilterReducer = createReducer('')({
    [FILTER_NAMESPACE]: ( state, action ) => {
        return action.payload
    }
});

export default combineReducers({
    ...apiMapReducer,
    [FILTER]: playerFilterReducer,
});
