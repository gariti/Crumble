import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { withRouter, Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.loading) {
      setLoading(user.loading);
    }
  }, [user.loading]);

  return (
    !loading && (
      <div>
        <h1>Profile</h1>
        <ul>
          <li>{`Email: ${user.data.email}`}</li>
          <li>{`Name: ${user.data.firstName} ${user.data.nickname} ${user.data.lastName}`}</li>
          <li>{user.data.bio}</li>
          <li>{user.data.address1}</li>
          <li>{user.data.address2}</li>
          <li>{user.data.city}</li>
          <li>{user.data.state}</li>
          <li>{user.data.postal}</li>
        </ul>

        <Link to="/editprofile">Edit Profile</Link>
        <Link to="/">Home</Link>
      </div>
    )
  );
}

export default withRouter(Profile);
