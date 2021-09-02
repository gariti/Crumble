import React, { useEffect, useState } from 'react';

import firebase from '../firebase/Firebase';

export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setAuthUser);
  }, []);

  return (
    // eslint-disable-next-line prettier/prettier
    <AuthContext.Provider value={{ authUser }}>
      {children}
    </AuthContext.Provider>
  );
};
