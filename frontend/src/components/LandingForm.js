import React from "react";
import "../styles/App.css";

const LandingForm = props => {
  console.log(JSON.stringify(props));
  return (
    <header className="App-header">
      <div>How's the water</div>
      <div className="nav_links">
        <div className="login_link">Login</div>
      </div>
    </header>
  );
};

export default LandingForm;
