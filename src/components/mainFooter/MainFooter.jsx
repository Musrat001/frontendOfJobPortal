import "../../css/mainFooter.css";

function MainFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>
            Job<span>Finder</span>
          </h2>

          <p>Connecting talent with opportunity.</p>
          <p>Building better careers, together.</p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">♥</a>
            <a href="#">◎</a>
          </div>
        </div>

        {/* Job Seekers */}
        <div className="footer-column">
          <h3>For Job Seekers</h3>

          <a href="#">Browse Jobs</a>
          <a href="#">Saved Jobs</a>
          <a href="#">Applications</a>
          <a href="#">Career Tips</a>
        </div>

        {/* Recruiters */}
        <div className="footer-column">
          <h3>For Recruiters</h3>

          <a href="#">Post a Job</a>
          <a href="#">Find Candidates</a>
          <a href="#">Pricing</a>
          <a href="#">Recruiter Login</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <a href="#">Help Center</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Support</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 JobFinder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default MainFooter;
