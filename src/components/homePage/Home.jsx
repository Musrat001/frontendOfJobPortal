import tcsLogo from "../../assets/tcslogo.jpg";
import amazonLogo from "../../assets/amazonlogo.jpg";
import microsoftLogo from "../../assets/microsoftlogo.png";
import Hero from "./Hero";
import JobBox from "../jobBox/JobBox";
import "../../css/home.css";

function Home() {
  return (
    <div>
      <Hero />
      <div className="jobBoxConatiner">
        <JobBox image={tcsLogo} />
        <JobBox image={tcsLogo} />
        <JobBox image={amazonLogo} />
        <JobBox image={amazonLogo} />
        <JobBox image={microsoftLogo} />
      </div>
    </div>
  );
}

export default Home;
