// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDcrQJsgVY-JyUQ3ecwSqMt2QU0imsRFs",
  authDomain: "mindful-monents.firebaseapp.com",
  projectId: "mindful-monents",
  storageBucket: "mindful-monents.appspot.com",
  messagingSenderId: "747313910558",
  appId: "1:747313910558:web:f8cf400dfad509e9e7af0f",
  measurementId: "G-7XHVQLSB4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
