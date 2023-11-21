// LoginForm.js

import React, { useState } from "react";
import "../login/login.css";
import Components from "../login/Components";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const data = {
    name: name,
    username: username,
    email: email,
    password: password,
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(data);

    // if (password === confirmPassword) {
    //     console.log(data);
    //     const url = "https://music-backend-kinl.onrender.com/Signup-Login/create";
    //     // const url = "http://localhost:5000/Signup-Login/create";

    //     axios
    //       .post(url, data)
    //       .then((res) => {
    //         if (res.status === 200) {
    //           Alert(
    //             "Redirected to Login page",
    //             "Created Account Successfully..!"
    //           );
    //           navigate("/");
    //           setName("");
    //           setUsername("");
    //           setConfirmPassword("");
    //           setPassword("");
    //           setEmail("");
    //         }
    //       })
    //       .catch((err) => {
    //         if (err.response && err.response.status === 400) {
    //           // alert(err.response.data); // Display the response data from the server
    //           Alert(err.response.data, "");
    //         } else {
    //           // alert("An error occurred: " + err.message);
    //           Alert(err.message, "");
    //         }
    //       });
    //   } else {
    //     setError("Password doesn't matched!");
    //   }
    // };
  };
  return (
    <>
      <div className="auth">
        <div>
          <h1 className="musicer-logo1">
            <i class="bi bi-boombox">&nbsp;</i>Musicer
          </h1>
        </div>

        <div className="wrapper" style={{ marginTop: "50px" }}>
          <div className="title">SignUp Form</div>
          <form action="#">
            <div className="field">
              <input type="text" required onChange={nameHandler} />
              <label>Name</label>
            </div>
            <div className="field">
              <input type="text" required onChange={userNameHandler} />
              <label>Username</label>
            </div>
            <div className="field">
              <input type="text" required onChange={emailHandler} />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" required onChange={passwordHandler} />
              <label>Password</label>
            </div>
            {/* <div className="field">
              <input type="password" required />
              <label> Confirm Password</label>
            </div> */}
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
              <input type="submit" value="SignUp" onClick={clickHandler} />
            </div>
            <div className="signup-link">
              If you are a member? <a href="/">Login now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
