import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"; // Import Firestore
import { doc, setDoc } from "firebase/firestore";

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
const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
const resetPassword = (email) => sendPasswordResetEmail(auth, email);

const db = getFirestore(app);

const addOrder = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    console.log("Order added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding order: ", e);
    throw e;
  }
};

const getUserOrders = async (userId) => {
  try {
    const q = query(collection(db, "orders"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error fetching orders: ", e);
    throw e;
  }
};

const updateUserData = async (userId, userData) => {
    try {
      const userDoc = doc(db, "users", userId);
      await setDoc(userDoc, userData, { merge: true });
      console.log("User data updated");
    } catch (error) {
      console.error("Error updating user data: ", error);
      throw error;
    }
  };

const addShippingAddress = async (userId, address) => {
    try {
      const userDoc = doc(db, "users", userId);
      const addressesCol = collection(userDoc, "addresses");
      await addDoc(addressesCol, address);
      console.log("Address added");
    } catch (error) {
      console.error("Error adding address: ", error);
      throw error;
    }
  };
  
  const getShippingAddresses = async (userId) => {
    try {
      const userDoc = doc(db, "users", userId);
      const addressesCol = collection(userDoc, "addresses");
      const addressSnapshot = await getDocs(addressesCol);
      return addressSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching addresses: ", error);
      throw error;
    }
  };
  
  export { auth, register, login, resetPassword, db, addOrder, getUserOrders, updateUserData, addShippingAddress, getShippingAddresses };
  
