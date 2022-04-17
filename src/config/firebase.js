// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytic, logEvent} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {firebaseConfig} from './settings'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);

logEvent(Analytics, 'firebase_init',);

export {Analytics}