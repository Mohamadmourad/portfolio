import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZINNXxffjHz8xPwZHbU1BoTg0MzeRcVE",
  authDomain: "myportfolio-2a0cb.firebaseapp.com",
  projectId: "myportfolio-2a0cb",
  storageBucket: "myportfolio-2a0cb.appspot.com",
  messagingSenderId: "718030237055",
  appId: "1:718030237055:web:89895f3f22f65e9d033e4a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
