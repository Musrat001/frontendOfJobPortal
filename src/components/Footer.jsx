import React from "react";
import "../css/footer.css";
function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="icon"></div>
      <div className="paras">
        <h5 className="feature" >{props.title}</h5>
        <p>{props.des}</p>
      </div>
    </div>
  );
}

export default Footer;
