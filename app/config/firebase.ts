// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Required for side-effects
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVGUTwUqHlHIZhxplgaOf1i5JREvHG4kE",
  authDomain: "findjob-5bd9d.firebaseapp.com",
  projectId: "findjob-5bd9d",
  storageBucket: "findjob-5bd9d.appspot.com",
  messagingSenderId: "985384434397",
  appId: "1:985384434397:web:f531cb9b10af11beaab934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);