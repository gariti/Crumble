/* eslint-disable no-console */

/* eslint-disable react/prop-types */
import React from 'react'

// @ts-ignore
export const UserContext = React.createContext()

export const UserProvider = ({ user, children }) => (
  <UserContext.Provider value={user}>{children}</UserContext.Provider>
)
