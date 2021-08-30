// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREB_STORAGE_BUCK,
  messagingSenderId: process.env.REACT_APP_FIREB_MSG_SEND_ID,
  appId: process.env.REACT_APP_FIREB_APP_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
