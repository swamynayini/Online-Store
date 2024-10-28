// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwZg2qs_zeBWEWaJHfLiW7I3dDOHot4Bw",
  authDomain: "store-b4661.firebaseapp.com",
  projectId: "store-b4661",
  storageBucket: "store-b4661.appspot.com",
  messagingSenderId: "505307118798",
  appId: "1:505307118798:web:775670df58575de7eba49f"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()