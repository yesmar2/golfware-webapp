import { myFirebase } from '../../../firebase/firebase';

import {
    requestLogin,
    receiveLogin,
    loginError,
    requestLogout,
    receiveLogout,
    logoutError,
    verifyRequest,
    verifySuccess,
} from './actions';

import { leagueOperations } from '../leagues';

const loginUser = (email, password) => (dispatch) => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch(receiveLogin(user));
        })
        .catch(() => {
            // Do something with the error if you want!
            dispatch(loginError());
        });
};

const logoutUser = () => (dispatch) => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(() => {
            // Do something with the error if you want!
            dispatch(logoutError());
        });
};

const verifyAuth = () => (dispatch) => {
    dispatch(verifyRequest());
    myFirebase
        .auth()
        .onAuthStateChanged((user) => {
            if (user !== null) {
                dispatch(receiveLogin(user));
                dispatch(leagueOperations.fetchLeaguesByFirebaseID(user.uid));
            }
            dispatch(verifySuccess());
        });
};

const authOperations = {
    loginUser,
    logoutUser,
    verifyAuth,
};

export {
    loginUser,
    logoutUser,
    verifyAuth,
};

export default authOperations;
