import { getFirestore, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState, useContext } from 'react'

import { AuthContext } from './AuthContext'

export const UserContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    data: null,
    loading: true,
    docRef: null,
  })
  const { fbUser, auth } = useContext(AuthContext)
  const db = getFirestore()

  useEffect(() => {
    if (fbUser) {
      setUser({
        ...user,
        docRef: doc(db, 'users', fbUser.uid),
      })
    }
  }, [fbUser])

  useEffect(() => {
    if (user.docRef) {
      getDoc(user.docRef).then((d) => {
        setUser({
          ...user,
          data: {
            ...d.data(),
            uid: fbUser.uid,
            email: fbUser.email,
            emailVerified: fbUser.emailVerified,
          },
          loading: false,
        })
      })
    }
  }, [user.docRef])

  return (
    // eslint-disable-next-line prettier/prettier
    <UserContext.Provider value={{ user, setUser, auth }}>
      {children}
    </UserContext.Provider>
  )
}
