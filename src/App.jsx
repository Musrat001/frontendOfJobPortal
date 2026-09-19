import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

// import Footer from "./components/footer/Footer";
import MainFooter from "./pages/public/MainFooter";
import UserContextProvider from "./components/contexts/UserContextProvider";
// import { useContext } from "react";

function App() {
  // const {setUser} = useContext();
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <MainFooter/>
    </UserContextProvider>
  );
}

export default App;
