// src/plugins/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export { auth, register, login, resetPassword };
