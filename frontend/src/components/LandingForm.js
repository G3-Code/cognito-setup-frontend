import React from "react";
import { LOGIN_URL } from "../config/aws-user-pool-config";

const LandingForm = () => {
  return (
    <header className="App-header">
      <div>How's the water!</div>
      <div>
        <a href={LOGIN_URL}>Login</a>
      </div>
    </header>
  );
};

export default LandingForm;
