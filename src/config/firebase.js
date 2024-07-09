// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqGE4KOxKQgy1FZ7cbYpZSAd9KZDNHZxk",
  authDomain: "sitehub-cb7d6.firebaseapp.com",
  projectId: "sitehub-cb7d6",
  storageBucket: "sitehub-cb7d6.appspot.com",
  messagingSenderId: "390308977120",
  appId: "1:390308977120:web:9c46923e78cca4d2ebf385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}