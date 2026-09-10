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
import Home from "./components/homePage/Home";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact";
import Jobs from "./components/jobs/Jobs.jsx";
import Companies from "./components/companies/Companies.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import User from "./components/user/User.jsx";
import Profile from "./components/profile/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="companies" element={<Companies />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="profile" element={<Profile />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
