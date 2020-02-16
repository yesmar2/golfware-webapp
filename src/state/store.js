import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./ducks";
import { apiService, createLogger } from "./middlewares";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore( initialState ) {
    const rootReducer = combineReducers( reducers );

    return createStore(
        rootReducer,
        initialState,
        composeEnhancer( applyMiddleware(
            apiService,
            thunk,
            createLogger(true),
        )),
    );
}
