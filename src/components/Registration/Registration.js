import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="container">
      <h2 className="pt-5">Create Account</h2>
      <Form className="py-5" onSubmit="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="p-2 rounded bg-primary text-white"
        >
          Submit
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
