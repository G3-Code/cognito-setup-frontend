import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingForm from "./LandingForm";
import HomePageForm from "./HomePageForm";
import LoginForm from "./LoginForm";
import PrivateRoute from "./PrivateRoute";
import "../styles/App.css";
import { connect } from "react-redux";
import { getData } from "../actions";

// import { Auth } from "aws-amplify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      isLoggin: true
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("amplify-signin-with-hostedUI")
      ? true
      : false;
    console.log("::APP::COMPONENT DID MOUNT :: DATA IS :: " + data);
    this.props.getData(data);
  }

  render() {
    console.log(":: APP:: RENDER :: " + this.props.isLogged);
    return (
      <Router>
        {/* <Route exact path="/" component={() => <LandingForm auth={Auth} />} /> */}
        <Route exact path="/" component={LandingForm} />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute
          exact
          path="/home"
          component={HomePageForm}
          auth={this.props.isLogged}
        />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("::MAP STATE TO PROPS :: STATE :: " + state.isLogged);
  return {
    isLogged: state.isLogged,
    isLoggin: state.isLoggin
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(App);
