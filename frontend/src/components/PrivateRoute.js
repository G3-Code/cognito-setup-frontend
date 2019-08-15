import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          console.log(
            ":: PRIVATE ROUTE - TOKEN AVAILABLE ::" +
              localStorage.getItem("token")
          );
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
