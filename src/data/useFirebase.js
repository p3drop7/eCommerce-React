// SDK functions needed
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const DATABASE_URL = "https://rcs-react-clothing-store-default-rtdb.europe-west1.firebasedatabase.app/"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQM8cPJdb59igxyPYDRyVWEkm8D9yMRCM",
  authDomain: "rcs-react-clothing-store.firebaseapp.com",
  projectId: "rcs-react-clothing-store",
  storageBucket: "rcs-react-clothing-store.appspot.com",
  messagingSenderId: "597946518972",
  appId: "1:597946518972:web:72bec1d70ca0d81befafb9",
  measurementId: "G-3Y00KF4N9P",

  // Realtime database
  // Name: rcs-react-clothing-store
  // region: europe-west1 (Belgium)
  databaseURL: DATABASE_URL
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getDatabase()