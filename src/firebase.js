// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr4oA3--rrX1uuPOIce0xZe8vNfQb4bAQ",
  authDomain: "iot-1-f04b1.firebaseapp.com",
  projectId: "iot-1-f04b1",
  storageBucket: "iot-1-f04b1.appspot.com",
  messagingSenderId: "447928364290",
  appId: "1:447928364290:web:32025ca5195e939a77261b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {app, auth,provider}
