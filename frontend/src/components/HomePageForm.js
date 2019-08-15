import React from "react";
import "../styles/App.css";
//import { connect } from "react-redux";
//import { home } from "../actions";
import { Auth } from "aws-amplify";

class HomePageForm extends React.Component {
  componentDidMount() {
    console.log("-----------------" + Auth);
  }
  render() {
    return (
      <header className="App-header">
        <div>How's the water!</div>
        <div>
          <a className="login_link" href="/logout">
            Logout
          </a>
        </div>
      </header>
    );
  }
}

export default HomePageForm;
