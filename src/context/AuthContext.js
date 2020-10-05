import React, { useEffect, useState } from "react";
import firebase from "../firebase/Firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setAuthUser);
  }, []);

  return (
    <AuthContext.Provider value={{ authUser: authUser }}>
      {children}
    </AuthContext.Provider>
  );
};
