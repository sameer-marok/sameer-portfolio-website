// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// PASTE YOUR FIREBASE CONFIG OBJECT HERE
const firebaseConfig = {
  apiKey: "AIzaSyCq2TobXL_-3MFHC4GUAkW8dq35_4c9joM",
  authDomain: "sameer-portfolio-f59bb.firebaseapp.com",
  projectId: "sameer-portfolio-f59bb",
  storageBucket: "sameer-portfolio-f59bb.firebasestorage.app",
  messagingSenderId: "19624392971",
  appId: "1:19624392971:web:940ae01052728b6c164a0e",
  measurementId: "G-6L9VMD7QD5"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firestore database instance
export const db = getFirestore(app);