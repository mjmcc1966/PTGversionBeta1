
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMTArphEX6wMMwg2WIlIFC0wMqTW7R1dc",
  authDomain: "politics-the-game.firebaseapp.com",
  projectId: "politics-the-game",
  storageBucket: "politics-the-game.firebasestorage.app",
  messagingSenderId: "51907672837",
  appId: "1:51907672837:web:a6c6d5a390007d68c5d56c",
  measurementId: "G-WQXL398S2H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: browserLocalPersistence
});

const db = getFirestore(app);

export { auth, db };
