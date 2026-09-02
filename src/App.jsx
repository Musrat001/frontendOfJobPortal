import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import MainFooter from "./components/mainFooter/MainFooter";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <MainFooter/>
    </>
  );
}

export default App;
