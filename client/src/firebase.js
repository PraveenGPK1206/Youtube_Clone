import { initializeApp } from "firebase/app";
import  {getAuth ,GoogleAuthProvider}  from "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_JvmQ23sQNrUYpJq5C5lqhzpIQW-nYmc",
  authDomain: "clone-ef842.firebaseapp.com",
  projectId: "clone-ef842",
  storageBucket: "clone-ef842.appspot.com",
  messagingSenderId: "740590914563",
  appId: "1:740590914563:web:9c74e03e6381765d541236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();
export default app;