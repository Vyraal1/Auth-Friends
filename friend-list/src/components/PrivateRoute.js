import React from "react";
import { Route, Redirect } from "react-router-dom";

// so we re-alias this for linter reasons? Or will react send a warning?
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
