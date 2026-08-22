import React from "react";
import womenWorking from "../../assets/womenWorking.png";
import "../../css/hero.css";

function Hero() {
  return (
    <div>
      <div className="mainBox">
        <div className="left-half">
          <h2 className="black">Find Your</h2>
          <h2 className="blue">Dream Job</h2>
          <p>
            Discover thousand of opportunity
            <br />
            near you and start your career journey today
          </p>

          <div className="searchBox">
            <input type="text" placeholder="Search By title" />
            <button> Search </button>
          </div>
        </div>
        <div className="right-half">
          <img src={womenWorking} alt="" />
        </div>
      </div>
      <div className="option">
        <ol>
          <li className="indicator">Profile:</li>
          <li>JavaScript </li>
          <li>React</li>
          <li>NodeJs</li>
          <li>UI/UX</li>
          <li>DevOps</li>
        </ol>
      </div>
      <div className="heading">
        <h2>Featured Jobs </h2>
        <p>View All Jobs </p>
      </div>
    </div>
  );
}

export default Hero;
