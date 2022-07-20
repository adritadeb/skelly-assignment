import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVxQ72MXAfPkXXSAY2fReuhWdwasZPMCU",
  authDomain: "e-shop-4f780.firebaseapp.com",
  projectId: "e-shop-4f780",
  storageBucket: "e-shop-4f780.appspot.com",
  messagingSenderId: "691092189050",
  appId: "1:691092189050:web:3cd2dd44795e3370ec30c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;