import React from "react";
import "../../css/header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <h1>
          <span>Job</span>Finder
        </h1>
        <ul>
          <li>
            <NavLink className="NavLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/jobs">
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="btnBox">
          <button className="loginBtn">
            <NavLink className="login" to="/login">
              Login
            </NavLink>
          </button>
          <button className="signUpBtn">
            <NavLink className="register" to="/register">
              Register
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
