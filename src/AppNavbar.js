import React from 'react';
import { Navbar, Nav } from 'react-bootstrap' ;

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#Home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;