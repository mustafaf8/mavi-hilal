// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb36R36G4I3WIWFY1k8b5O5bk0gfTMmAc",
  authDomain: "mavi-hilal.firebaseapp.com",
  projectId: "mavi-hilal",
  storageBucket: "mavi-hilal.firebasestorage.app",
  messagingSenderId: "371391185669",
  appId: "1:371391185669:web:98e275ae9a3ee0b76d2d6c",
  measurementId: "G-YGYJ98KVTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);