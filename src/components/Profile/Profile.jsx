import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function Profile() {
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
        </ul>
      </div>
    )
  );
}
