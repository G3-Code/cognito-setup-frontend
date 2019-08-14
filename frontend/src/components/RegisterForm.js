import React from "react";
//import { LOGIN_URL } from "../config/aws-user-pool-config";
import "../styles/App.css";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  return (
    <header className="App-header">
      <div>How's the water</div>
      <div className="nav_links">
        <NavLink to="/login" className="login_link">
          Login
        </NavLink>
        <NavLink to="/register" className="login_link">
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default RegisterForm;
