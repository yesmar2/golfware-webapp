import * as types from "./types";
import { createReducer } from "../../utils";

const playersReducer = createReducer([])({
    [types.FETCH_PLAYERS_COMPLETED]: ( state, action ) => {
        return action.payload
    }
});
console.log(playersReducer);
export default playersReducer;
