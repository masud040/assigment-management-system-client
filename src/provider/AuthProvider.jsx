import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

import auth from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setNameAndImage = (name, photo) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const socialLogin = (provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loggedUser = currentUser?.email || user?.email;
      setUser(currentUser);
      setIsLoading(false);
      if (currentUser) {
        const email = loggedUser;
        axios
          .post(
            "http://localhost:5000/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data));
      } else {
        axios.post(
          "http://localhost:5000/logout",
          { loggedUser },
          { withCredentials: true }
        );
      }
    });
    return () => unsubscribe();
  }, [user?.email]);
  const authInfo = {
    createUser,
    setNameAndImage,
    socialLogin,
    loginUser,
    logoutUser,
    user,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
