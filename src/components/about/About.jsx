import imageOfAboutPage from "../../assets/imageOfAboutPage.png";
import "../../css/about.css";
function about() {
  return (
    <>
      <div className="container">
        <div className="top_section">
          <div className="left_section">
            <button>About JobFinder</button>
            <h2>About Us</h2>
            <p>
              Job Finder is a modern platform that connect job seeker with the
              right opportunity and helps recuiter to find the best tallent
            </p>
          </div>
          <div className="right_section">
            <img src={imageOfAboutPage} alt="" />
          </div>
        </div>
      </div>
      <div className="p-2xl">
        <div className="">
          <div className="con">icon</div>
          <div className="dec">
            <h3>Our Mission</h3>
            <p>
              Our mission is to simplify job search process and recrutement by
              providing smart, simple and reliable plateform for everyone
            </p>
          </div>
          <div className="dec">
            <h3>Our Mission</h3>
            <p>
              Our mission is to simplify job search process and recrutement by
              providing smart, simple and reliable plateform for everyone
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
