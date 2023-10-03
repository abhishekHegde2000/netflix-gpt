// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC7wbQXrVhhOvn1zL24M552MF_gsFK8cA",
  authDomain: "netflixgpt-eb1a4.firebaseapp.com",
  projectId: "netflixgpt-eb1a4",
  storageBucket: "netflixgpt-eb1a4.appspot.com",
  messagingSenderId: "1030938945154",
  appId: "1:1030938945154:web:a927cd5bf48bebc677769b",
  measurementId: "G-PKE6LCYHG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();