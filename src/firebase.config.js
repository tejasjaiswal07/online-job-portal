// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIlQ_MNZDv8l0OORZqJ6zTCQ5OMUYwgH0",
  authDomain: "meta-carriers-page.firebaseapp.com",
  projectId: "meta-carriers-page",
  storageBucket: "meta-carriers-page.appspot.com",
  messagingSenderId: "621562768875",
  appId: "1:621562768875:web:7e1bf18f6d6d4581cd7dae",
  measurementId: "G-XT227J9KJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db}