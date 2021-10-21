import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="" id="" placeholder="your email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="" id="" />
          <br />
          <br />
          <input type="submit" value="submit" />
          <p>
            New to dental care? <Link to="/registration">Create Account</Link>
          </p>
        </form>
        <p className="text-danger">Another way for SignIn</p>
        <button onClick={signInUsingGoogle} className="btn-regular">
          Signin with google
        </button>
      </div>
    </div>
  );
};

export default Login;
