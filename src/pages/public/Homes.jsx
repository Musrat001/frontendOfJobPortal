import { Link } from "react-router-dom";
import "../../css/homes.css";

function Homes() {
  const features = [
    {
      icon: "🔎",
      title: "Verified Job Listings",
      text: "Find genuine job opportunities from trusted companies.",
    },
    {
      icon: "🏢",
      title: "Top Companies",
      text: "Explore opportunities from companies across different industries.",
    },
    {
      icon: "🎯",
      title: "Skill-Based Matching",
      text: "Discover jobs that match your skills and career goals.",
    },
    {
      icon: "⚡",
      title: "Easy Application",
      text: "Apply for relevant jobs through a simple application process.",
    },
    {
      icon: "🔔",
      title: "Job Alerts",
      text: "Get notified when new opportunities matching your interests appear.",
    },
    {
      icon: "📚",
      title: "Career Resources",
      text: "Access useful resources for resumes, interviews and career development.",
    },
  ];

  const differences = [
    {
      icon: "🎓",
      title: "Fresher Friendly",
      text: "Discover internships and entry-level opportunities.",
    },
    {
      icon: "🎯",
      title: "Smart Matching",
      text: "Find opportunities according to your skills.",
    },
    {
      icon: "🛡️",
      title: "Trusted Employers",
      text: "Focus on genuine and verified opportunities.",
    },
    {
      icon: "📈",
      title: "Career Growth",
      text: "Resources to help improve your professional journey.",
    },
    {
      icon: "🤝",
      title: "Community",
      text: "Connect with professionals and fellow job seekers.",
    },
    {
      icon: "📊",
      title: "Application Tracking",
      text: "Keep track of your job applications in one place.",
    },
  ];

  return (
    <div className="job-home">
      {/* ================= HERO ================= */}
      <section className="job-hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="stars">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="hero-container">
          {/* Hero Content */}
          <div className="hero-content">
            <span className="hero-badge">
              🎓 For Students • Freshers • Professionals
            </span>

            <h1>
              Find the Job
              <br />
              <span>You Deserve.</span>
            </h1>

            <p>
              Discover verified job opportunities, connect with companies and
              find career opportunities that match your skills and goals.
            </p>

            

            {/* Popular searches */}
            <div className="popular-searches">
              <span>Popular:</span>

              <button>Web Developer</button>
              <button>Software Engineer</button>
              <button>Data Analyst</button>
              <button>Internship</button>
              <button>Remote</button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="hero-visual">
            <div className="hero-circle">
              <div className="hero-person">🧑‍💻</div>

              <h3>Your Career</h3>

              <p>Starts Here</p>
            </div>

            <div className="floating-card card-one">
              <strong>10K+</strong>
              <small>Job Opportunities</small>
            </div>

            <div className="floating-card card-two">
              <strong>500+</strong>
              <small>Hiring Companies</small>
            </div>

            <div className="floating-card card-three">
              <strong>95%</strong>
              <small>User Satisfaction</small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat">
            <strong>10K+</strong>
            <span>Active Jobs</span>
          </div>

          <div className="stat">
            <strong>500+</strong>
            <span>Companies</span>
          </div>

          <div className="stat">
            <strong>50K+</strong>
            <span>Job Seekers</span>
          </div>

          <div className="stat">
            <strong>95%</strong>
            <span>Satisfaction</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section">
        <div className="section-heading">
          <span>✦ FEATURES</span>

          <h2>
            Everything You Need
            <br />
            <strong>To Find Your Next Job</strong>
          </h2>

          <p>
            We make the job search process simple, personalized and effective.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY DIFFERENT ================= */}
      <section className="difference-section">
        <div className="difference-container">
          <div className="difference-content">
            <span>✦ WHY JOBFINDER?</span>

            <h2>
              More Than
              <br />
              <strong>Just a Job Portal.</strong>
            </h2>

            <p>
              JobFinder is designed especially for students, freshers and
              early-career professionals who need more than just a list of job
              postings.
            </p>
          </div>

          <div className="difference-grid">
            {differences.map((item) => (
              <div className="difference-card" key={item.title}>
                <div className="difference-icon">{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="career-cta">
        <div className="cta-glow"></div>

        <div className="cta-content">
          <span>✦ YOUR FUTURE STARTS HERE</span>

          <h2>
            Take the Next Step
            <br />
            Towards Your
            <strong> Dream Career</strong>
          </h2>

          <p>
            Create your profile, discover relevant opportunities and start
            building your career today.
          </p>

          <div className="cta-buttons">
            <Link to="/register" className="cta-primary">
              Get Started for Free →
            </Link>

            <Link to="/jobs" className="cta-secondary">
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homes;
