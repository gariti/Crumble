import React, { useContext } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/Auth";
import logo from "../../logo.svg";

function LandingPage() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
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
