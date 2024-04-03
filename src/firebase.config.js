// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP3tAHGPeVSQBCwXHEz7x4LewsoouIsqg",
  authDomain: "ph-conceptual.firebaseapp.com",
  projectId: "ph-conceptual",
  storageBucket: "ph-conceptual.appspot.com",
  messagingSenderId: "1011941678329",
  appId: "1:1011941678329:web:29f771c704f8fee6fa5628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;