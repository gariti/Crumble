import React, { useEffect, useState, useContext } from 'react';

import firebase from 'firebase/Firebase';
import { AuthContext } from './AuthContext';

export const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    data: null,
    loading: true,
    docRef: null,
  });
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    if (authUser) {
      setUser({
        ...user,
        docRef: firebase.firestore().collection('users').doc(authUser.uid),
      });
    }
  }, [authUser]);

  useEffect(() => {
    if (user.docRef) {
      user.docRef.get().then((doc) => {
        setUser({
          ...user,
          data: {
            ...doc.data(),
            uid: authUser.uid,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
          },
          loading: false,
        });
      });
    }
  }, [user.docRef]);

  return (
    // eslint-disable-next-line prettier/prettier
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};
