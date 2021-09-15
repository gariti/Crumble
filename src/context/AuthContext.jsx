import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebase from 'firebase/firebase'
import React, { useState } from 'react'

const auth = getAuth(firebase)
export const AuthContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [fbUser, setFbUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setFbUser(user)
    }
  })

  return (
    // eslint-disable-next-line prettier/prettier
    <AuthContext.Provider value={{ fbUser, auth }}>
      {children}
    </AuthContext.Provider>
  )
}
