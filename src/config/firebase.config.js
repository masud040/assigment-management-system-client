import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQck8LQHrmCSP4nDyq_C92gYjTEFKi7w0",
  authDomain: "assignment-management-sy-5a2db.firebaseapp.com",
  projectId: "assignment-management-sy-5a2db",
  storageBucket: "assignment-management-sy-5a2db.appspot.com",
  messagingSenderId: "14935977864",
  appId: "1:14935977864:web:a05cd8b921a5e4c09e543d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
