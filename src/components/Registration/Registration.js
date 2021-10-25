import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const handleRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be 6 charecter long");
      return;
    }
    if (/!(?=.*[A-Z].*[A-Z]) /.test(password)) {
      setError("Ensure string has two uppercase letters.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container" onSubmit={handleRegistration}>
      <h2 className="pt-5">Create Account</h2>
      <Form className="py-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter Password" />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div>
          <small className="text-danger">{error}</small>
        </div>
        <Button
          variant="primary"
          type="submit"
          className="p-2 rounded bg-primary text-white"
        >
          Register
        </Button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <p className="text-danger">Another way for SignIn</p>
      <button className="btn-regular">Signin with google</button>
      <br /> <br />
    </div>
  );
};

export default Registration;
