import React from "react";
import "../../css/jobBox.css";
function JobBox({image}) {
  return (
    <div className="mainContainer">
      <div className="leftHalf">
        <img src={image} alt="" />
      </div>
      <div className="rightHalf">
        <div className="head">
          <h3>Backend Developer</h3>
          <p>XYZ Technologies</p>
        </div>

        <ul className="address">
          <li>one </li>
          <li>two</li>
          <li>tree </li>
        </ul>

        <div className="salary">
          <h4>$30 - $50</h4>
        </div>

        <div className="actionBox">
          <h6>5 Days Left</h6>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default JobBox;
