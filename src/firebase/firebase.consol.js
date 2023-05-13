// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuC25tZ37iE2_JJBKVbMJfKEIkJmsjWag",
  authDomain: "car-doctor-5453b.firebaseapp.com",
  projectId: "car-doctor-5453b",
  storageBucket: "car-doctor-5453b.appspot.com",
  messagingSenderId: "972907820337",
  appId: "1:972907820337:web:74a4c4557038a2b3b8ec10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app