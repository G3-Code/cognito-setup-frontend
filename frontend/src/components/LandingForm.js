import React from "react";
import "../styles/App.css";
// import { Auth } from "aws-amplify";
import { NavLink } from "react-router-dom";

const LandingForm = props => {
  // console.log(
  //   "---------LANDING FORM----------" +
  //     localStorage.getItem("amplify-signin-with-hostedUI")
  // );
  return (
    <header className="App-header">
      <div>How's the water</div>
      <div className="nav_links">
        {/* <div onClick={() => Auth.federatedSignIn()}>Login</div> */}
        <NavLink to="/login" className="login_link">
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default LandingForm;
