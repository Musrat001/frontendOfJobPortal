import React from "react";
import "../../css/header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1>
          <span>Job</span>Finder
        </h1>
        <ul>
          <li>Home</li>
          <li>Job</li>
          <li>Companies</li>
          <li>About</li>
          <li>contact</li>
        </ul>
        <div className="btnBox">
          <button className="loginBtn">Login</button>
          <button className="signUpBtn">Register</button>
        </div>
      </div>
    </>
  );
}

export default Header;
