import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/public/Home.jsx";
import About from "./pages/public/About.jsx";
import Contact from "./pages/public/Contact.jsx";
import Jobs from "./pages/public/Jobs.jsx";
import Companies from "./pages/public/Companies.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import User from "./pages/user/User.jsx";
import Profile from "./pages/public/Profile.jsx";
import Homes from "./pages/public/Homes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homes />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="companies" element={<Companies />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="userDashboard" element={<User />} />
      {/* <Route path="user/:userId" element={<User />} /> */}
      <Route path="profile" element={<Profile />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
