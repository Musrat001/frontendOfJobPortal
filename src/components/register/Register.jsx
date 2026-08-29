import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiBriefcase,
  FiEye,
  FiEyeOff,
  FiChevronDown,
  FiUserPlus,
  FiCheck,
} from "react-icons/fi";
import workingWomen from "../../assets/womenWorking.png";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "../../css/register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-page">
      <div className="register-container">
        {/* ================= LEFT SIDE ================= */}
        <div className="register-left">
          <div className="brand">Join JobFinder</div>

          <h1>Create your account</h1>

          <p className="left-description">
            Sign up and start your journey to
            <br />
            find the perfect job.
          </p>

          <div className="womenImage">
            <img src={workingWomen} alt="" />
          </div>

          {/* Benefits */}
          <div className="benefits">
            <div className="benefit">
              <FiCheck />
              <span>Access thousands of job opportunities</span>
            </div>

            <div className="benefit">
              <FiCheck />
              <span>Apply to jobs with a single click</span>
            </div>

            <div className="benefit">
              <FiCheck />
              <span>Track your applications in one place</span>
            </div>

            <div className="benefit">
              <FiCheck />
              <span>Get hiring updates and job alerts</span>
            </div>
          </div>

          <div className="login-text">
            Already have an account?
            <a href="/login">Login</a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="register-right">
          <div className="form-wrapper">
            <h2>Register</h2>

            <p className="form-subtitle">
              Fill in the details to create your account
            </p>

            {/* Name + Email */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  Full Name <span>*</span>
                </label>

                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>
                  Email Address <span>*</span>
                </label>

                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>

            {/* Password + Confirm Password */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  Password <span>*</span>
                </label>

                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                <small>Must be at least 8 characters long</small>
              </div>

              <div className="form-group">
                <label>
                  Confirm Password <span>*</span>
                </label>

                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="form-group phone-group">
              <label>Phone Number</label>

              <div className="phone-input">
                <div className="country-code">
                  <span className="india-flag">🇮🇳</span>

                  <span>+91</span>

                  <FiChevronDown />
                </div>

                <input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            {/* Current Role */}
            <div className="form-group">
              <label>Current Role</label>

              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>
                    Select your current role
                  </option>

                  <option>Student</option>

                  <option>Software Developer</option>

                  <option>Frontend Developer</option>

                  <option>Backend Developer</option>

                  <option>Full Stack Developer</option>

                  <option>Designer</option>

                  <option>Other</option>
                </select>

                <FiChevronDown />
              </div>
            </div>

            {/* Terms */}
            <div className="terms">
              <input type="checkbox" id="terms" />

              <label htmlFor="terms">
                I agree to the <a href="#">Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            {/* Register Button */}
            <button className="register-btn">
              <FiUserPlus />
              Register
            </button>

            {/* Divider */}
            <div className="divider">
              <span></span>

              <p>or sign up with</p>

              <span></span>
            </div>

            {/* Social Buttons */}
            <div className="social-buttons">
              <button className="social-btn">
                <FcGoogle />

                <span>Google</span>
              </button>

              <button className="social-btn">
                <FaLinkedinIn className="linkedin-icon" />

                <span>LinkedIn</span>
              </button>

              <button className="social-btn">
                <FaGithub className="microsoft-icon" />

                <span>Microsoft</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
