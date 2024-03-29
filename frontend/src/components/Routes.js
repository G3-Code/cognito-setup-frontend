import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePageForm from "./HomePageForm";

export default ({ childProps }) => (
  <Switch>
    <PrivateRoute
      exact
      path="/home"
      component={HomePageForm}
      props={childProps}
    />
  </Switch>
);
