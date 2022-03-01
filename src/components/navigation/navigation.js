import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home Of Movies</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation
