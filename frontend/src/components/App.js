import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingForm from "./LandingForm";
import HomePageForm from "./HomePageForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
//import PrivateRoute from "./PrivateRoute";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/home" component={HomePageForm} />
    </Router>
  );
}

export default App;
