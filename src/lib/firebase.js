import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-bbce0.firebaseapp.com",
  projectId: "reactchat-bbce0",
  storageBucket: "reactchat-bbce0.appspot.com",
  messagingSenderId: "617010483452",
  appId: "1:617010483452:web:e37c5968284fe402adc779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()