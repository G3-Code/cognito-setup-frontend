import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import { activateLogout } from "../actions";
import { Auth } from "aws-amplify";

class HomePageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    console.log(
      "-----------------" +
        Auth.currentAuthenticatedUser()
          .then(user => {
            console.log(user);
            this.setState({
              user: user
            });
          })
          .catch(err => console.log(err))
    );
  }
  handleLogout = async e => {
    await Auth.signOut();
    await this.props.activateLogout();
    this.props.history.push("/");
  };
  render() {
    console.log("************" + JSON.stringify(this.state.user.attributes));
    if (this.state.user.attributes) {
      const userInfo = JSON.parse(this.state.user.attributes);
      console.log(JSON.parse(userInfo));
    }
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
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { activateLogout }
)(HomePageForm);
