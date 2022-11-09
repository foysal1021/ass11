import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // create user start
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }; // create user end

  // login user start
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // login user end

  // user logout start
  const userlogout = () => {
    return signOut(auth);
  };
  // user logout end

  // updated profile start
  const updateUser = (upName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: upName,
      photoURL: photo,
    });
  };
  // updated profile end

  const googleSinin = () => {
    return signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    userRegister,
    userLogin,
    userlogout,
    updateUser,
    googleSinin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
