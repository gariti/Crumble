/* eslint-disable no-console */

/* eslint-disable react/prop-types */
import React from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({ children, user }) => (
  <UserContext.Provider value={user}>{children}</UserContext.Provider>
)
