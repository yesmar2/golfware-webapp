import { combineReducers } from "redux";
import { createReducer } from "../../utils";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS
} from "./types";

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
}

const authReducer = createReducer(initialState)({
    [LOGIN_REQUEST]: ( state, action ) => {
        return {
            ...state,
            isLoggingIn: true,
            loginError: false
        };
    },
    [LOGIN_SUCCESS]: ( state, action ) => {
        return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: true,
            user: action.user
        };
    },
    [LOGIN_FAILURE]: ( state, action ) => {
        return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: false,
            loginError: true
        };
    },
    [LOGOUT_REQUEST]: ( state, action ) => {
        return {
            ...state,
            isLoggingOut: true,
            logoutError: false
        };
    },
    [LOGOUT_SUCCESS]: ( state, action ) => {
        return {
            ...state,
            isLoggingOut: false,
            isAuthenticated: false,
            user: {}
        };
    },
    [LOGOUT_FAILURE]: ( state, action ) => {
        return {
            ...state,
            isLoggingOut: false,
            logoutError: true
        };
    },
    [VERIFY_REQUEST]: ( state, action ) => {
        return {
            ...state,
            isVerifying: true,
            verifyingError: false
        };
    },
    [VERIFY_SUCCESS]: ( state, action ) => {
        return {
            ...state,
            isVerifying: false
        };
    },
});

export default authReducer;