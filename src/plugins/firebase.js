import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAT7lalZ5wWcqZ5h9RkCakUtTdn1YecKLM",
    authDomain: "e-commerce-shop-b89a4.firebaseapp.com",
    projectId: "e-commerce-shop-b89a4",
    storageBucket: "e-commerce-shop-b89a4.appspot.com",
    messagingSenderId: "190417616816",
    appId: "1:190417616816:web:865cc00ba83f5229d7e075"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth };