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
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Jobs from "./components/jobs/Jobs.jsx";
import Companies from "./components/companies/Companies.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import User from "./components/user/User.jsx";

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
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
