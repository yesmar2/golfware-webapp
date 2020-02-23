import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";


const initialStatusState = {
    working: false,
    success: false,
    error: undefined
};

const statusReducer = createReducer(initialStatusState)({
    [`${types.FETCH}_START`]: ( state ) => {
        return {
            ...state,
            working: true
        };
    },
    [`${types.FETCH}_END`]: ( state, action ) => {
        const { error, meta } = action;
        return {
            ...state,
            working: false,
            success: !error,
            error,
            meta
        };
    }
});

const dataReducer = createReducer([])({
    [`${types.FETCH}_SET`]: ( state, action ) => {
        return action.payload
    }
});

const playerFilterReducer = createReducer('')({
    [types.FILTER]: ( state, action ) => {
        return action.payload
    }
});


export default combineReducers( {
    [types.DATA_NAMESPACE]: dataReducer,
    STATUS: statusReducer,
    FILTER: playerFilterReducer,
} );

// console.log(playersReducer);
// export default playersReducer;
