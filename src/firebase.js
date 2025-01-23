// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_lQpoQxYSgvOD1XkuNbuodlXfD43iBiI",
  authDomain: "testsite-78b54.firebaseapp.com",
  projectId: "testsite-78b54",
  storageBucket: "testsite-78b54.firebasestorage.app",
  messagingSenderId: "662495410072",
  appId: "1:662495410072:web:e6da9066e303d6d839dded",
  measurementId: "G-KF2TLJ49VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);