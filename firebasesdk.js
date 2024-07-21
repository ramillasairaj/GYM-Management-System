// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6qZI8Oku-uVmGaVok6x31tDGlYFD-Wdg",
    authDomain: "jymm-8e61d.firebaseapp.com",
    projectId: "jymm-8e61d",
    storageBucket: "jymm-8e61d.appspot.com",
    messagingSenderId: "326261637489",
    appId: "1:326261637489:web:d3b70123b3a0047a54b6d0",
    measurementId: "G-5XCP15QY5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);