// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9k7Qt-rzwjCwDsSVNVAfXH33b4DTXbFA",
  authDomain: "netflixgpt-275b7.firebaseapp.com",
  projectId: "netflixgpt-275b7",
  storageBucket: "netflixgpt-275b7.firebasestorage.app",
  messagingSenderId: "168803036800",
  appId: "1:168803036800:web:dc283fb83f434a0e3d0065",
  measurementId: "G-DPTPR9PQWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// doing it here once so that no need of code repetion in defferet files
export const auth = getAuth();
