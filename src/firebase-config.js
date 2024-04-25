// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFENYu90CJFpX-S2SChdf30BuP3StevmQ",
  authDomain: "chat-app-practice-c4c67.firebaseapp.com",
  projectId: "chat-app-practice-c4c67",
  storageBucket: "chat-app-practice-c4c67.appspot.com",
  messagingSenderId: "644676162346",
  appId: "1:644676162346:web:0af27395f419b783f64453",
  measurementId: "G-XP6VPJRWNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);