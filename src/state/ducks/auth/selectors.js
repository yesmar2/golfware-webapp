import { DUCK_NAMESPACE } from './types';

const _selectAuth = (appState) => appState[DUCK_NAMESPACE];

const selectIsAuthenticated = (appState) => _selectAuth(appState).isAuthenticated;

const selectIsVerifying = (appState) => _selectAuth(appState).isVerifying;

const selectIsLoggingIn = (appState) => _selectAuth(appState).isLoggingIn;

const selectLoginError = (appState) => _selectAuth(appState).loginError;

const authSelectors = {
    selectIsAuthenticated,
    selectIsVerifying,
    selectIsLoggingIn,
    selectLoginError,
};

export default authSelectors;
