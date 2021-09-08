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
  const { authUser } = useContext(AuthContext)
  const db = getFirestore()

  useEffect(() => {
    if (authUser) {
      setUser({
        ...user,
        docRef: doc(db, 'users', authUser.uid),
      })
    }
  }, [authUser])

  useEffect(() => {
    if (user.docRef) {
      getDoc(user.docRef).then((d) => {
        setUser({
          ...user,
          data: {
            ...d.data(),
            uid: authUser.uid,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
          },
          loading: false,
        })
      })
    }
  }, [user.docRef])

  return (
    // eslint-disable-next-line prettier/prettier
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
