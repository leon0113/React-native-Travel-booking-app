
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCF-Z3LyN8dA-whzGTNHCvdWxDQ4Spiu-M",
  authDomain: "travel-stay.firebaseapp.com",
  projectId: "travel-stay",
  storageBucket: "travel-stay.appspot.com",
  messagingSenderId: "966727273435",
  appId: "1:966727273435:web:a6a58cf081042d0656f5fe",
  measurementId: "G-554VJRMCXE"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};
