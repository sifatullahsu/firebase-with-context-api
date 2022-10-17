// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIDI8TXmAojyZicMdb9X4BJhnMQOzBsc",
  authDomain: "netlify-project-4c42c.firebaseapp.com",
  projectId: "netlify-project-4c42c",
  storageBucket: "netlify-project-4c42c.appspot.com",
  messagingSenderId: "607955067160",
  appId: "1:607955067160:web:4c3c620f2c40d21ae37e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;