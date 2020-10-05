import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!authUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/landing"} />
        )
      }
    />
  );
};

export default PrivateRoute;
