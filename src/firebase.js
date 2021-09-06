// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwTBJck54L1gly54j7dxPiS0xiYiTnmjQ",
  authDomain: "wakwitter.firebaseapp.com",
  projectId: "wakwitter",
  storageBucket: "wakwitter.appspot.com",
  messagingSenderId: "283832193866",
  appId: "1:283832193866:web:f7e61f56decf33db2d27b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;