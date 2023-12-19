
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDL-k3OtArMXmptC_TGOpFAUYczNOPbbY8",
  authDomain: "mi-primer-base.firebaseapp.com",
  projectId: "mi-primer-base",
  storageBucket: "mi-primer-base.appspot.com",
  messagingSenderId: "515828638852",
  appId: "1:515828638852:web:c3703a67c666de27480ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);