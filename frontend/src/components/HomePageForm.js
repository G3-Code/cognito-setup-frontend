import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import { activateLogout } from "../actions";
import { Auth } from "aws-amplify";

class HomePageForm extends React.Component {
  componentDidMount() {
    console.log("-----------------" + Auth);
  }
  handleLogout = async e => {
    await Auth.signOut();
    await this.props.activateLogout();
    this.props.history.push("/");
  };
  render() {
    return (
      <header className="App-header">
        <div>How's the water!</div>
        <div>
          <div className="login_link" onClick={this.handleLogout}>
            Logout
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  null,
  { activateLogout }
)(HomePageForm);
