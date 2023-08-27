import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIIAfhpSq9fPEOMCON1x2LRJQwIJ8Jb8w",
    authDomain: "pokedex-7197d.firebaseapp.com",
    projectId: "pokedex-7197d",
    storageBucket: "pokedex-7197d.appspot.com",
    messagingSenderId: "775875983136",
    appId: "1:775875983136:web:7bbc36878239a44ac84945",
    measurementId: "G-ER9T5ZP9RK"
  };  
  
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");