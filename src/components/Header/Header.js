import React from "react";
import "./Header.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="primary" variant={"dark"} expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="https://previews.123rf.com/images/sejalanart/sejalanart2006/sejalanart200600686/149453344-dental-care-logo-vector-creative-dentist-logo-dental-clinic-logo-design-for-medical-business-company.jpg"
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                  />
                  <span className="bold">Dental Care</span>
                </Navbar.Brand>
              </Container>
              <Nav.Link as={NavLink} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/services"}>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/appointment"}>
                Appointment
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/faq"}>
                FAQ
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/registration"}>
                Registration
              </Nav.Link>
            </Nav>
            <span
              style={{ color: "white", fontWeight: 400, paddingRight: "5px" }}
            >
              {user.displayName || user.email}
            </span>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              {user.email ? (
                <button onClick={logOut} className="lg-btn">
                  Log Out
                </button>
              ) : (
                <Link to="/login" className="lg-btn">
                  Log in
                </Link>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
