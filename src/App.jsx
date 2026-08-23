import "./App.css";
import Header from "./components/Header";
import Hero from "./components/homePage/Hero";
import JobBox from "./components/homePage/JobBox";
import Footer from "./components/Footer";
import tcsLogo from "./assets/tcslogo.jpg";
import amazonLogo from "./assets/amazonlogo.jpg";
import microsoftLogo from "./assets/microsoftlogo.png";

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
        <Footer title="Thousand of job" des="Find the right fit for you" />
        <Footer title="Top Companies" des="Apply to leading companies" />
        <Footer title="Trusted Platform" des="Secure and Reliable" />
        <Footer title="Easy and Fast" des="Quick application process" />
      </div>
    </>
  );
}

export default App;
