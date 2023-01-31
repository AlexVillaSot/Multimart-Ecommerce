import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKvva0Dw6g7DWGGderlI8viso3mjNwN2k",
  authDomain: "multimart-80b85.firebaseapp.com",
  projectId: "multimart-80b85",
  storageBucket: "multimart-80b85.appspot.com",
  messagingSenderId: "113287057871",
  appId: "1:113287057871:web:07bc1b47726a42592302ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
