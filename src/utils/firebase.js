// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBLCDkUHYi9ngRNwRXPfU4HsgMh7AlCCIs",
  authDomain: "emcs-f78ef.firebaseapp.com",
  projectId: "emcs-f78ef",
  storageBucket: "emcs-f78ef.appspot.com",
  messagingSenderId: "518791364403",
  appId: "1:518791364403:web:3049be5ec5614d80918846",
  measurementId: "G-VG5WELEEP8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
