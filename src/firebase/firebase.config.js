// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeowKYcKhzT_ytXhODwnV6XscSN4w8d3Y",
  authDomain: "dragon-news-8f125.firebaseapp.com",
  projectId: "dragon-news-8f125",
  storageBucket: "dragon-news-8f125.appspot.com",
  messagingSenderId: "643804314624",
  appId: "1:643804314624:web:b48a90b4506d9774ebace5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;