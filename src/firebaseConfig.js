// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQED8lVCPefKvFdg3kLGGPUAj6WW6ntAk",
  authDomain: "blogs-58774.firebaseapp.com",
  projectId: "blogs-58774",
  storageBucket: "blogs-58774.appspot.com",
  messagingSenderId: "329152922424",
  appId: "1:329152922424:web:64167b26b8cdc0930637cd",
  measurementId: "G-YEJV4EB6LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 