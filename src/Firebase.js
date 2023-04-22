// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH68JC62-KOhjkxVvzmbbFWaFATJuiGms",
  authDomain: "joby-iset.firebaseapp.com",
  projectId: "joby-iset",
  storageBucket: "joby-iset.appspot.com",
  messagingSenderId: "342939522687",
  appId: "1:342939522687:web:a4c4ab6236f7d79bfdd14a",
  measurementId: "G-YBH84404X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const analytics = getAnalytics(app);
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)
