import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = () => {
  const { auth, signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  // console.log("came from", location.state?.from);
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const processLogin = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit={processLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name=""
            id=""
            placeholder="your email"
            onBlur={handleEmailChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="" id="" onBlur={handlePasswordChange} />
          <br />
          <br />
          <p>
            <small className="text-danger">{error}</small>
          </p>
          <input type="submit" value="Log In" />
          <p>
            New to dental care? <Link to="/registration">Create Account</Link>
          </p>
        </form>
        <p className="text-danger">Another way for SignIn</p>
        <button onClick={handleGoogleLogin} className="btn-regular">
          <span style={{ paddingRight: "4px" }}>
            <FaGoogle />
          </span>
          Signin with google
        </button>
      </div>
    </div>
  );
};

export default Login;
