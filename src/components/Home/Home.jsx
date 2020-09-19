import React, { useContext } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/Auth";
import firebase from "../../Firebase/Firebase";

function Home() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser.emailVerified === false) {
    return <Redirect to="/editprofile" />;
  }

  return (
    <div>
      <h1>
        Hello {currentUser.displayName}. Logged in as: {currentUser.email}
      </h1>

      <Link to="/editprofile">Edit Profile</Link>

      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
}

export default withRouter(Home);
