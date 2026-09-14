import {
  Target,
  Eye,
  BriefcaseBusiness,
  UsersRound,
  FileText,
  ShieldCheck,
  UserRound,
  CircleCheck,
} from "lucide-react";

import "../../css/about.css";
import illustration from "../../assets/imageOfAboutPage.png";

const offers = [
  {
    icon: BriefcaseBusiness,
    title: "Find Jobs",
    text: "Explore thousands of jobs from top companies and find the perfect match.",
    color: "blue",
  },
  {
    icon: UsersRound,
    title: "For Recruiters",
    text: "Post jobs, review applicants and hire the right talent faster.",
    color: "green",
  },
  {
    icon: FileText,
    title: "Smart Matching",
    text: "Our smart algorithm matches your skills with relevant opportunities.",
    color: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    text: "Your data is protected with top-notch security and privacy.",
    color: "orange",
  },
];

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "10K+",
    label: "Active Jobs",
    color: "blue",
  },
  {
    icon: UsersRound,
    value: "25K+",
    label: "Companies",
    color: "green",
  },
  {
    icon: UserRound,
    value: "1M+",
    label: "Job Seekers",
    color: "purple",
  },
  {
    icon: CircleCheck,
    value: "98%",
    label: "Satisfaction Rate",
    color: "orange",
  },
];

function App() {
  return (
    <div className="about-page">
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-content">
          <span className="badge">About JobFinder</span>

          <h1>About Us</h1>

          <p>
            JobFinder is a modern platform that connects job seekers with the
            right opportunities and helps recruiters find the best talent.
          </p>
        </div>

        <div className="hero-image">
          <img src={illustration} alt="JobFinder illustration" />
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="mission-section">
        {/* Mission */}

        <div className="info-box">
          <div className="info-icon blue">
            <Target size={28} />
          </div>

          <div className="info-content">
            <h2>Our Mission</h2>

            <p>
              Our mission is to simplify the job search process and recruitment
              by providing a smart, reliable, and efficient platform for
              everyone.
            </p>
          </div>
        </div>

        {/* Vision */}

        <div className="info-box">
          <div className="info-icon blue">
            <Eye size={28} />
          </div>

          <div className="info-content">
            <h2>Our Vision</h2>

            <p>
              Our vision is to become the most trusted job marketplace globally,
              empowering people to build better careers and organizations to
              grow stronger.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}

      <section className="offers-section">
        <h2 className="section-title">What We Offer</h2>

        <div className="offer-grid">
          {offers.map((item) => {
            const Icon = item.icon;

            return (
              <div className="offer-card" key={item.title}>
                <div className={`offer-icon ${item.color}`}>
                  <Icon size={25} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= STATISTICS ================= */}

      <section className="stats-section">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-item" key={item.label}>
              <div className={`stat-icon ${item.color}`}>
                <Icon size={22} />
              </div>

              <div className="stat-content">
                <strong className={item.color}>{item.value}</strong>

                <span>{item.label}</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
