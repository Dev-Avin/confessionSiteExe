// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcJ13QiyQjWFRmEtfc1YbgQVzU8o4oz6E",
  authDomain: "confessionexe.firebaseapp.com",
  projectId: "confessionexe",
  storageBucket: "confessionexe.appspot.com",
  messagingSenderId: "70446942221",
  appId: "1:70446942221:web:74cb73f3275a26e11dad44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();