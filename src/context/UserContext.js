import React, { useEffect, useState, useContext } from "react";
import firebase from "../firebase/Firebase.js";
import { AuthContext } from "./AuthContext";
import { auth } from "firebase";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    data: null,
    loading: true,
    docRef: null,
  });
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    if (authUser)
      setUser({
        ...user,
        docRef: firebase.firestore().collection("users").doc(authUser.uid),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.docRef]);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};
