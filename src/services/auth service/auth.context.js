import React, { useState, createContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
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
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setUser(userCredential.user);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, error, onLogin, onRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
