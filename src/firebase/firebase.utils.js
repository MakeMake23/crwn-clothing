import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA-o5Qqao2XghoGRAPcUzpxzIFy8-x4uXI",
  authDomain: "crwn-db-andy.firebaseapp.com",
  projectId: "crwn-db-andy",
  storageBucket: "crwn-db-andy.appspot.com",
  messagingSenderId: "887447323174",
  appId: "1:887447323174:web:0b5f4fed4834e29e38dce7",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
