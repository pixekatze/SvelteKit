// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDvYZnVL_hQ2lhde_luG_YZ5ftDPmUR6HU",
	authDomain: "svelteprofileproject.firebaseapp.com",
	projectId: "svelteprofileproject",
	storageBucket: "svelteprofileproject.appspot.com",
	messagingSenderId: "376860888465",
	appId: "1:376860888465:web:66969c9fcfae37de269e30",
	measurementId: "G-V8KRV8HQJ3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const analytics = getAnalytics(app);
