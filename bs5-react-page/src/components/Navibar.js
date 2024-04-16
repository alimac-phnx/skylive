import React from 'react';
import {Nav, Navbar, NavDropdown, Container, Image} from 'react-bootstrap';

function Navibar() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "darkgreen"}} fixed="top">
        <Container>
            <Navbar.Brand href="#home">Sky-Live</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#more">More</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navibar;