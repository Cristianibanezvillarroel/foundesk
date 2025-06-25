import React, { useState } from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Mortarboard, ChevronDown } from 'react-bootstrap-icons';
import logo from '/public/logo_ft.png'; // Ajusta la ruta si tu logo está en otra carpeta

const NavBarShort = ({ courseName, courseSlug }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);

  const handleDropdownClick = (event) => {
    setShowPopover(!showPopover);
    setTarget(event.target);
  };

  return (
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              marginRight: '42px'
            }}>
            <Mortarboard size={20}
              style={{
                color: 'white',
                marginRight: 6
              }} />
            <Nav.Link as={Link} to="/my-courses"
              style={{
                fontWeight: 500,
                color: 'white',
                fontFamily: 'Inter, Arial, sans-serif',
                paddingRight: 0
              }}>
              Mi aprendizaje
            </Nav.Link>
            <OverlayTrigger
              show={showPopover}
              placement="bottom"
              target={target}
              overlay={
                <Popover id="popover-basic">
                  <Popover.Body>
                    0 de 29 resultados
                  </Popover.Body>
                </Popover>
              }
              rootClose
              onHide={() => setShowPopover(false)}
            >
              <span
                style={{
                  cursor: 'pointer',
                  color: 'white',
                  marginLeft: 4,
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={handleDropdownClick}
                tabIndex={0}
                aria-label="Mostrar resultados"
              >
                <ChevronDown size={18} />
              </span>
            </OverlayTrigger>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarShort;