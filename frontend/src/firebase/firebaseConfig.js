import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuKa5i_2aVbT97_QzVt1AHnsOh3HVnZGw",
    authDomain: "igsharing-1.firebaseapp.com",
    projectId: "igsharing-1",
    storageBucket: "igsharing-1.appspot.com",
    messagingSenderId: "158883535585",
    appId: "1:158883535585:web:4e599472f23d709117b5a0",
    measurementId: "G-QBZT64GNS8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);