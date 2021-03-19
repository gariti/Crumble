import React, { useContext } from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import logo from '../../location_city-24px.svg';

function LandingPage() {
  const { authUser } = useContext(AuthContext);

  if (authUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>New here?</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/signup">New User?</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default withRouter(LandingPage);
