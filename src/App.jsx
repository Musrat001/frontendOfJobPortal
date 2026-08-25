import "./App.css";
import Header from "./components/Header";
import Hero from "./components/homePage/Hero";
import JobBox from "./components/homePage/JobBox";
import Footer from "./components/Footer";
import tcsLogo from "./assets/tcslogo.jpg";
import amazonLogo from "./assets/amazonlogo.jpg";
import microsoftLogo from "./assets/microsoftlogo.png";
import {
  FiBriefcase,
  FiUsers,
  FiShield,
  FiClock
} from "react-icons/fi";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="jobBoxConatiner">
        <JobBox image={tcsLogo} />
        <JobBox image={tcsLogo} />
        <JobBox image={amazonLogo} />
        <JobBox image={amazonLogo} />
        <JobBox image={microsoftLogo} />
      </div>
      <div className="footerMainContainer">
        <Footer  icon= {FiBriefcase} title="Thousand of job" des="Find the right fit for you" />
        <Footer icon= {FiUsers} title="Top Companies" des="Apply to leading companies" />
        <Footer icon= {FiShield} title="Trusted Platform" des="Secure and Reliable" />
        <Footer icon= {FiClock} title="Easy and Fast" des="Quick application process" />
      </div>
    </>
  );
}

export default App;
