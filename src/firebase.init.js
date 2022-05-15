// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzvZoGCA2ApWJ5wdHjsV9h_bHV2gzgoTU",
    authDomain: "food-mart-9e779.firebaseapp.com",
    projectId: "food-mart-9e779",
    storageBucket: "food-mart-9e779.appspot.com",
    messagingSenderId: "16411499111",
    appId: "1:16411499111:web:8e36a80bcfc5ce83d1d2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;