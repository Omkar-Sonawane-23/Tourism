import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCtzM2ELktJlTzqr2ADdKHNGjrcUad2g7k",
    authDomain: "tourism-login-firebase-24567.firebaseapp.com",
    projectId: "tourism-login-firebase-24567",
    storageBucket: "tourism-login-firebase-24567.appspot.com",
    messagingSenderId: "337880095259",
    appId: "1:337880095259:web:054f57ef9c34ed3664b6be",
    measurementId: "G-8B32E3M16Q"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)