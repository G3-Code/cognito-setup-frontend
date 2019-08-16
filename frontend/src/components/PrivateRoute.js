import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest.auth);
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.auth) {
          console.log(":: PRIVATE ROUTE - TOKEN AVAILABLE ::");

          return <Component {...props} />;
        } else {
          console.log(
            ":: PRIVATE ROUTE - TOKEN NOT AVAILABLE" +
              localStorage.getItem("token")
          );
          return <Redirect to="/" />;
        }
      }}
    />
  );
  // if (rest.auth) {
  //   return <Component {...rest} />;
  // } else {
  //   return <Redirect to="/" />;
  // }
};

export default PrivateRoute;
