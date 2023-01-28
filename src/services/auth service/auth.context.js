import React, { useState, createContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
        setError(e.toString());
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, error, onLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
