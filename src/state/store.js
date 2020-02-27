import {
    createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './ducks';
import {
    apiService, createLogger,
} from './middlewares';
import { verifyAuth } from './ducks/auth/operations';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancer(applyMiddleware(apiService, thunk, createLogger(true))),
    );

    store.dispatch(verifyAuth());

    return store;
}
