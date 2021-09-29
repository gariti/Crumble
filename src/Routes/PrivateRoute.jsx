/* eslint-disable react/prop-types */
import LandingPage from 'Views/LandingPage/LandingPage'
import React from 'react'
import { Route } from 'react-router-dom'

// Route to landing page if not authenticated
const PrivateRoute = ({ user, component, ...options }) => {
  const finalComponent = user.data ? component : LandingPage

  return <Route path={options.path} component={finalComponent} />
}

export default PrivateRoute
