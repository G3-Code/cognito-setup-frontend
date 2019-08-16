import React from "react";
import "../styles/App.css";
import { Auth } from "aws-amplify";

const LandingForm = props => {
  console.log(
    "---------LANDING FORM----------" +
      localStorage.getItem("amplify-signin-with-hostedUI")
  );
  return (
    <header className="App-header">
      <div>How's the water</div>
      <div className="nav_links">
        <div onClick={() => Auth.federatedSignIn()}>Login</div>
      </div>
    </header>
  );
};

export default LandingForm;
