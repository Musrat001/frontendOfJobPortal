import "../../css/login.css";
import { Link } from "react-router";
import menoflogin from "../../assets/menoflogin.png";
import { FiSearch, FiBookmark, FiBell } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
function Login() {
  const [identifier, setidentifier] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const loginObj = {
    identifier,
    password,
  };

  const { setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const response = await fetch("http://localhost:7052/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginObj),
        credentials: "include",
      });
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }
      alert(data.message);
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log("error While Registering user: ", error);
    }
  };

  return (
    <div id="mainContainer">
      <div className="leftContainer">
        <div className="head">
          <h2>Welcome back</h2>
          <p>Login through your accout to take next step in your career</p>
        </div>
        <img src={menoflogin} alt="image" />
        <div className="option-text">
          <div className="optionBox">
            <div className="icon">
              <FiSearch />
            </div>
            <p>Find the right opportunities</p>
          </div>
          <div className="optionBox">
            <div className="icon">
              <FiBookmark />
            </div>
            <p>Traack your application</p>
          </div>
          <div className="optionBox">
            <div className="icon">
              <FiBell />
            </div>
            <p>Get personalised notification</p>
          </div>
        </div>
        <div className="registerInstead">
          <p>
            Don't have an account? <Link to={"./register"}>Register</Link>
          </p>
        </div>
      </div>
      <div className="rightContainer">
        <div className="topContents">
          <div className="head">
            <h2>Log In </h2>
            <p>Welcom Back ! Enter your details</p>
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email </label>
            <input
              className="input"
              type="text"
              placeholder="Enter your Registered Email or Username"
              name="email"
              onChange={(e) => setidentifier(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <p className="forgetpassword">
            <Link>Forget password</Link>
          </p>
          <div className="remember">
            <input type="checkbox" name="remember_me" id="rememberMe" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="submitBtn">
            <button type="submit" onClick={handleSubmit}>
              {" "}
              Login In
            </button>
          </div>
        </div>
        <div className="bottomContents">
          <div className="divider">
            <span></span>
            <p>or continue with</p>
            <span></span>
          </div>
          <div className="socialContainer">
            <button className="socialBtn">
              <FcGoogle className="socialIcon google" />
              <span>Google</span>
            </button>

            <button className="socialBtn">
              <FaLinkedinIn className="socialIcon linkedin" />
              <span>LinkedIn</span>
            </button>

            <button className="socialBtn">
              <FaGithub className="socialIcon microsoft" />
              <span>GitHub</span>
            </button>
          </div>
        </div>
        <div className="bottomBox">
          <div className="securityBox">
            <FiShield className="securityIcon" />

            <div className="securityText">
              <h4>Your data is safe with us</h4>
              <p>
                We use industry-standard security to protect your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
