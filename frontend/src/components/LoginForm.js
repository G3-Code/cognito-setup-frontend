import React from "react";
//import { LOGIN_URL } from "../config/aws-user-pool-config";
import "../styles/App.css";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <fragment>
      <header className="App-header">
        <div>How's the water</div>
        <div className="nav_links">
          <NavLink to="/login" className="login_link">
            Login
          </NavLink>
        </div>
      </header>
      <div>This is the Login form.</div>
    </fragment>
  );
};

export default LoginForm;
