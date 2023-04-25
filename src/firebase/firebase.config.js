// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7SmEYl1s4mpqxe7yH0ppf7GryUrbrnQk",
  authDomain: "the-news-dragon-f874a.firebaseapp.com",
  projectId: "the-news-dragon-f874a",
  storageBucket: "the-news-dragon-f874a.appspot.com",
  messagingSenderId: "1024507978569",
  appId: "1:1024507978569:web:8b7f379083b476839cb098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;