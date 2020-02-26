import { DUCK_NAMESPACE } from './types';

const _selectAuth = (appState) => {
    return appState[DUCK_NAMESPACE];
}

const selectIsAuthenticated = (appState) => {
    return _selectAuth(appState).isAuthenticated
};

const selectIsVerifying = (appState) => {
    return _selectAuth(appState).isVerifying
};

const selectIsLoggingIn = (appState) => {
    return _selectAuth(appState).isLoggingIn
};

const selectLoginError = (appState) => {
    return _selectAuth(appState).loginError
};

const authSelectors = {
    selectIsAuthenticated,
    selectIsVerifying,
    selectIsLoggingIn,
    selectLoginError,
}

export default authSelectors;