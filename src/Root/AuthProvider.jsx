import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // creater user with popup
  const popupLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // create user with github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // sign in
  const userSignIN = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // save user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    userSignIN,
    user,
    logOut,
    loading,
    popupLogin,
    githubLogin,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
