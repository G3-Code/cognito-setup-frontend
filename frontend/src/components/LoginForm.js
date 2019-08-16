import React from "react";
import "../styles/App.css";
import { Auth } from "aws-amplify";

const LoginForm = () => {
  return (
    <fragment>
      <header className="App-header">
        <div>How's the water</div>
      </header>
      <div>
        <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>
          Sign In with Facebook
        </button>

        <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
          Sign In with Google
        </button>
      </div>
    </fragment>
  );
};

export default LoginForm;
