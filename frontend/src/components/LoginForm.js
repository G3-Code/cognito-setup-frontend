import React from "react";
import "../styles/App.css";
import { Auth } from "aws-amplify";
//import btn_google from "../assets/btn_google_signin.png";
//import btn_facebook from "../assets/btn_facebook_signin.png";

const LoginForm = () => {
  return (
    <fragment>
      <header className="App-header">
        <div>How's the water</div>
      </header>
      <div className="body_content">
        <div className="signin_content">
          <div>
            {/* <img
              src={btn_facebook}
              className="signin_btn_fb"
              alt="facebook sign-in"
              onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
            /> */}
            <button
              className="loginBtn loginBtn--facebook"
              onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
            >
              Login with facebook
            </button>
          </div>
          <div>
            {/* <img
              src={btn_google}
              className="signin_btn_g"
              alt="google sing-in"
              onClick={() => Auth.federatedSignIn({ provider: "Google" })}
            /> */}
            <button
              className="loginBtn loginBtn--google"
              onClick={() => Auth.federatedSignIn({ provider: "Google" })}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </fragment>
  );
};

export default LoginForm;
