import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/public/logo_ft.png'; // Ajusta la ruta si tu logo está en otra carpeta

const NavBarShort = ({ courseName, courseSlug }) => (
  <Navbar style={{ background: '#0d3878' }} variant="dark" expand="md">
    <Container fluid>
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          alt="Foundesk"
          height="32"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to={`/courses/detail/${courseSlug}`} style={{ fontWeight: 600, color: 'white', fontFamily: 'Inter, Arial, sans-serif' }}>
          {courseName}
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/my-courses" style={{ fontWeight: 500, color: 'white', fontFamily: 'Inter, Arial, sans-serif' }}>
          Mi Aprendizaje
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBarShort;
