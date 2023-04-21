
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";

import { BrowserRouter, Routes } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./home";


const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate ();

  const handleLogin = () => {
    navigate(`/home/${username}`);
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <div className="inputcontainers">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder="Password" />
      </div>
      <div className="login-btn">
        <button type="button" className="link-button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="link-contianer">
        <a
          href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop"
          className="small"
        >
          Forgot password
        </a>
      </div>
      <p className="Text">or Login using</p>
      <div className="other-Login">
        <div className="icons">
          <a className="fb" href="https://www.facebook.com/">
            <FaFacebook size="23px" color="white" />
          </a>
          <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1425033444%3A1681474238538150&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AQMjQ7QmnHJS4iH0Q-pnyq7a9oAbqawOqCiJECjw3EN-cbTa1hC8Hi9cW975aIHButpyL_rmcnIGZA&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <FaGoogle size="20px" color="white" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="20px" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home/:username" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
