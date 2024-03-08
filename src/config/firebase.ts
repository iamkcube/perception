import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAXtZQRoPFJ_0gZ9GswVlnolU9TXnjBOPY",
	authDomain: "perception-outr.firebaseapp.com",
	projectId: "perception-outr",
	storageBucket: "perception-outr.appspot.com",
	messagingSenderId: "421434351285",
	appId: "1:421434351285:web:f4f53c46e61932c8f9e8fc",
	measurementId: "G-EPGX8VY765",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
