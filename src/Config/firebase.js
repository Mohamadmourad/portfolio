import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH3-lxmy9O2ixBWMUVwGVCcmH2gG-ksC8",
  authDomain: "portfolio-31d53.firebaseapp.com",
  projectId: "portfolio-31d53",
  storageBucket: "portfolio-31d53.appspot.com",
  messagingSenderId: "218577908203",
  appId: "1:218577908203:web:67a89ae55b4f5638a2e9ae"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);