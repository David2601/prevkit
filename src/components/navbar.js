import logo from '../prevkit.png';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt="Logo PrevKit"
              src={logo}
              width="85"
              height="50    "
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Menu;