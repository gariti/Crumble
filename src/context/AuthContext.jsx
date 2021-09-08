import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'

export const AuthContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthUser(user)
    }
  })

  return (
    // eslint-disable-next-line prettier/prettier
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  )
}
