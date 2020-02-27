import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
} from './types';

const requestLogin = () => ({ type: LOGIN_REQUEST });

const receiveLogin = (user) => ({
    type: LOGIN_SUCCESS,
    user,
});

const loginError = () => ({ type: LOGIN_FAILURE });

const requestLogout = () => ({ type: LOGOUT_REQUEST });

const receiveLogout = () => ({ type: LOGOUT_SUCCESS });

const logoutError = () => ({ type: LOGOUT_FAILURE });

const verifyRequest = () => ({ type: VERIFY_REQUEST });

const verifySuccess = () => ({ type: VERIFY_SUCCESS });

export {
    requestLogin,
    receiveLogin,
    loginError,
    requestLogout,
    receiveLogout,
    logoutError,
    verifyRequest,
    verifySuccess,
};
