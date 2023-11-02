// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFeL2-ySnwZCpi5D9xvSG9dnGG1loh5Bw",
  authDomain: "raimondistore-c909b.firebaseapp.com",
  projectId: "raimondistore-c909b",
  storageBucket: "raimondistore-c909b.appspot.com",
  messagingSenderId: "1095179856982",
  appId: "1:1095179856982:web:93f8c58e1d0f36b17cdff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);