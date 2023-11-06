import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth/useAuth";
import Loading from "../component/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { allContext } = useAuth();
  const { user, isLoading } = allContext;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
