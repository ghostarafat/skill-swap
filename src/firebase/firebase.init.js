// Do NOT send firebase config to repo 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW_s2qZCXMM6MXrnNjcSNZ324eMF79Y5U",
  authDomain: "simple-firebase-auth-bfa36.firebaseapp.com",
  projectId: "simple-firebase-auth-bfa36",
  storageBucket: "simple-firebase-auth-bfa36.firebasestorage.app",
  messagingSenderId: "270911459445",
  appId: "1:270911459445:web:fed5cc2868e33fbadda83c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);