import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '/public/logo_ft.png';


export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand id="Navbar-Brand" as={Link} to='/' href="/">foundesk  <img id="Navbar-img" src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Relatores
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Metodologia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Todos los cursos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/dashboards' href="/dashboards">Dashboards</Nav.Link>
                            <Nav.Link as={Link} to='/documentals' href="/documentals">Gestion Documental</Nav.Link>
                            <Nav.Link as={Link} to='/nosotros' href="/nosotros">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to='/clientes' href="/clientes">Nuestros clientes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant="light">Ingresar</Button>
                    <Button variant="primary">Agenda una demo</Button>
                </Container>
            </Navbar>

        </>
    );
}