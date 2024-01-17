// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnXVVjUzdPKmpkjsg00vTahzCND9RSPyA",
  authDomain: "clon-netflix-d3ba6.firebaseapp.com",
  projectId: "clon-netflix-d3ba6",
  storageBucket: "clon-netflix-d3ba6.appspot.com",
  messagingSenderId: "734690181893",
  appId: "1:734690181893:web:d702f2a169448f2cfb6d6c",
  measurementId: "G-2YM8NYB9CJ"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase