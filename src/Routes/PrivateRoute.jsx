import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from 'views/LandingPage/LandingPage';

import { AuthContext } from '../context/AuthContext';

// Route to landing page if not authenticated
const PrivateRoute = ({ component, ...options }) => {
  const { authUser } = useContext(AuthContext);

  const finalComponent = authUser ? component : LandingPage;

  return <Route path={options.path} component={finalComponent} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
