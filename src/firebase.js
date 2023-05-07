import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRVakPzw3ilCbLDGKlo-F2rucrCEfYNTI",
  authDomain: "itda-e5530.firebaseapp.com",
  projectId: "itda-e5530",
  storageBucket: "itda-e5530.appspot.com",
  messagingSenderId: "501828849475",
  appId: "1:501828849475:web:0718ebcdc72542521729f6",
  measurementId: "G-06SWLHKCZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
