// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY5oSjJBq_PDLjPX89azCja-e3xHXKHRE",
  authDomain: "travel-and-tourism-3987f.firebaseapp.com",
  projectId: "travel-and-tourism-3987f",
  storageBucket: "travel-and-tourism-3987f.firebasestorage.app",
  messagingSenderId: "924242958018",
  appId: "1:924242958018:web:3110e3a4dbeaaba0a10d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)