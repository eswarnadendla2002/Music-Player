// LoginForm.js

import React, { useState } from "react";
import "./login.css"; // Import your stylesheet
import Components from "./Components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const data = {
    email: email,
    password: password,
  };
  const handleClick = (e) => {
    // const url = "https://music-backend-kinl.onrender.com/Signup-Login/login";
    // // const url = "http://localhost:5000/Signup-Login/login";
    // axios
    //   .post(url, data)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       navigate("/home", { state: { username } });
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.response && err.response.status === 400) {
    //       const result = Alert(err.response.data, "");
    //       // alert(err.response.data);
    //     } else {
    //       // alert(err.message);
    //       const result = Alert(err.message, "");
    //     }
    //   });
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="auth">
        <Components />

        <div className="wrapper">
          <div className="title">Login Form</div>
          <form action="#">
            <div className="field">
              <input
                type="text"
                required
                value={email}
                onChange={emailHandler}
              />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input
                type="password"
                required
                value={password}
                onChange={passwordHandler}
              />
              <label>Password</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="field">
              <input type="submit" value="Login" onClick={handleClick} />
            </div>
            <div className="signup-link">
              Not a member? <a href="/signup">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
