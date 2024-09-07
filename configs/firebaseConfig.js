// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "first-project-bf91b.firebaseapp.com",
  projectId: "first-project-bf91b",
  storageBucket: "first-project-bf91b.appspot.com",
  messagingSenderId: "942772743242",
  appId: "1:942772743242:web:45cf3d8cc1e25af6810ab3",
  measurementId: "G-EZKLWH60XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);