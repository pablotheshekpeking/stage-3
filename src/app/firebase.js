// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCazsoo1aM58HlLtlMLHNBxf80Gmquuikk",
  authDomain: "imagebox-c34c4.firebaseapp.com",
  projectId: "imagebox-c34c4",
  storageBucket: "imagebox-c34c4.appspot.com",
  messagingSenderId: "399175356605",
  appId: "1:399175356605:web:b70bf5948b7ef28085e7d4",
  measurementId: "G-CXTFL7F4XC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;