import React, { useContext, useState, useEffect } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import firebase from "../../firebase/Firebase";

function Home() {
  const { authUser } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(user.loading);
  }, [user]);

  return (
    !loading && (
      <div>
        <h1>
          Hello {user.data.firstName}. Logged in as: {authUser.email}
        </h1>

        <Link to="/editprofile">Edit Profile</Link>

        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      </div>
    )
  );
}

export default withRouter(Home);
