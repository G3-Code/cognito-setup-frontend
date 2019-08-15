import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(localStorage.getItem("amplify-signin-with-hostedUI"));
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("amplify-signin-with-hostedUI")) {
          console.log(":: PRIVATE ROUTE - TOKEN AVAILABLE ::");
          Auth.currentAuthenticatedUser().then(user => {
            Auth.userSession(user).then(session =>
              console.log(JSON.stringify(session.getIdToken().getJwtToken()))
            );
          });
          return <Component {...props} />;
        } else {
          Auth.currentAuthenticatedUser().then(user => {
            Auth.userSession(user).then(session =>
              console.log(JSON.stringify(session.getIdToken().getJwtToken()))
            );
          });

          console.log(
            ":: PRIVATE ROUTE - TOKEN NOT AVAILABLE" +
              localStorage.getItem("token")
          );
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
