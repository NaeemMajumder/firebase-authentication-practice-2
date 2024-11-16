// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-N9guS4tAQb7agXXjtTNLTg2Zr_e0YL8",
  authDomain: "auth-moha-milon-23c51.firebaseapp.com",
  projectId: "auth-moha-milon-23c51",
  storageBucket: "auth-moha-milon-23c51.firebasestorage.app",
  messagingSenderId: "113156039542",
  appId: "1:113156039542:web:6637307aafa25c66911057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);