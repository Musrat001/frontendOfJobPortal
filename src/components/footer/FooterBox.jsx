import "../../css/footer.css";
function FooterBox(props) {
  const Icon = props.icon;
  return (
    <div className="footerContainer">
      <div className="icon">
        {/* {" "} */}
        <Icon />
      </div>
      <div className="paras">
        <h5 className="feature">{props.title}</h5>
        <p>{props.des}</p>
      </div>
    </div>
  );
}

export default FooterBox;
