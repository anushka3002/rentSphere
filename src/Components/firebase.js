// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBupSBA5AYvn8-2IPUZ_yE8ORdJTFyDQU8",
  authDomain: "airbnb-bfaa6.firebaseapp.com",
  projectId: "airbnb-bfaa6",
  storageBucket: "airbnb-bfaa6.firebasestorage.app",
  messagingSenderId: "1086805786439",
  appId: "1:1086805786439:web:c2fbdf28b2a06680195662",
  measurementId: "G-9KW2C6B7HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();