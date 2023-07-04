// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,serverTimestamp } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWKE5A7OFYBvLzuI7gDLC1KBDKKasRDq0",
  authDomain: "yt-clone-pro-f3aaf.firebaseapp.com",
  projectId: "yt-clone-pro-f3aaf",
  storageBucket: "yt-clone-pro-f3aaf.appspot.com",
  messagingSenderId: "976692903486",
  appId: "1:976692903486:web:b2956c64e19fdd747a9b6f",
 // measurementId: "G-CYJ2447JJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db=getFirestore();
const auth=getAuth();
const provider=new GoogleAuthProvider();
const timestamp= serverTimestamp();

export { app, db,  auth,timestamp,provider};