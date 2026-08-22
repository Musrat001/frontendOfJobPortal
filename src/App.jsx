import "./App.css";
import Header from "./components/Header";
import Hero from "./components/homePage/Hero";
import JobBox from "./components/homePage/JobBox";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div className="jobBoxConatiner">
        <JobBox></JobBox>
        <JobBox></JobBox>
        <JobBox></JobBox>
        <JobBox></JobBox>
        <JobBox></JobBox>
      </div>
    </>
  );
}

export default App;
