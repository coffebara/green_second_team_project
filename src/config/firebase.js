import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBS5lslY8_p5hGeuoX9giHM5wdsMBTZWgU",
  authDomain: "itda-project-2.firebaseapp.com",
  projectId: "itda-project-2",
  storageBucket: "itda-project-2.appspot.com",
  messagingSenderId: "836393456848",
  appId: "1:836393456848:web:3b1917f1ccb0b86874fad5",
  measurementId: "G-8ZP1QKDW1M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
