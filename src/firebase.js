import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDmHbPcdb0FoRhKlx0cf4z3Ir_Z4XJzl7A",
  authDomain: "paswanatul-portfolio.firebaseapp.com",
  projectId: "paswanatul-portfolio",
  storageBucket: "paswanatul-portfolio.appspot.com",
  messagingSenderId: "732479331832",
  appId: "1:732479331832:web:037ef27cd5c1da6469ca0d"
};
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

