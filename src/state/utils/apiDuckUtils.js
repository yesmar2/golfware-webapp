import { combineReducers } from "redux";
import createReducer from "./createReducer";

const DATA_NAMESPACE = 'DATA';
const STATUS_NAMESPACE = `STATUS`;

const initialStatusState = {
    working: false,
    success: false,
    error: undefined
};

const buildApiMapReducer = (namespace) => {
    const statusReducer = createReducer(initialStatusState)({
        [`${namespace}/FETCH_START`]: ( state ) => {
            return {
                ...state,
                working: true
            };
        },
        [`${namespace}/FETCH_END`]: ( state, action ) => {
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
        [`${namespace}/FETCH_SET`]: ( state, action ) => {
            return action.payload
        }
    });

    return {
        [DATA_NAMESPACE]: dataReducer,
        [STATUS_NAMESPACE]: statusReducer,
    }
}

const buildApiSelectors = namespace => {
    const selectData = appState => appState[namespace][DATA_NAMESPACE];
    const selectStatus = appState => appState[namespace][STATUS_NAMESPACE];
    const selectWorking = appState => selectStatus(appState).working;
    const selectSuccess = appState => selectStatus(appState).success;

    return {
        selectData,
        selectStatus,
        selectWorking,
        selectSuccess
    }
}

export { buildApiSelectors, buildApiMapReducer };