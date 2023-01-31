import React, { useState, createContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth();

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsAuthenticated(true);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        setUser(null);
      })
      .catch((e) => {
        setError(e);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        error,
        onLogin,
        onRegister,
        setError,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
