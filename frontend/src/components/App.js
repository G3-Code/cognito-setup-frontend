import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingForm from "./LandingForm";
import HomePageForm from "./HomePageForm";
import LoginForm from "./LoginForm";
import PrivateRoute from "./PrivateRoute";
import "../styles/App.css";

// import { Auth } from "aws-amplify";

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/" component={() => <LandingForm auth={Auth} />} /> */}
        <Route exact path="/" component={LandingForm} />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/home" component={HomePageForm} />
      </Router>
    );
  }
}

export default App;
