import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBzGxTO2ZdQMr4iGSgZ8CgDJL7FoKgApFo',
    authDomain: 'golfware-d209f.firebaseapp.com',
    databaseURL: 'https://golfware-d209f.firebaseio.com',
    projectId: 'golfware-d209f',
    storageBucket: 'golfware-d209f.appspot.com',
    messagingSenderId: '688955330449',
    appId: '1:688955330449:web:945d6dc4eaac979bb89430',
    measurementId: 'G-84H8NE0ZZG',
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
