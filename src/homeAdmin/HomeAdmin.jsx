import React from "react";
import Login from "../component/login/Login";
import Register from "../component/register/Register";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./HomeAdmin.scss";
const HomeAdmin = () => {
  return (
    <section>
      <header className="header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand  as={NavLink} to="/">Home</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <NavDropdown title="Show more" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/add-product">
                    Add product
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/add-color">
                    Add color of product
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/add-image">
                    Add image and desc
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/add-tag-categories">
                    Add tag and categories
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </section>
  );
};

export default HomeAdmin;
