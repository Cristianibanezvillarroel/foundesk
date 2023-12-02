import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/public/logo_ft.png';
import ShoppingCartImg from '/public/shoppingcart.png'
import { useContext } from 'react';
import { ShoppingContext } from '../context/ShoppingContext';


export const NavBar = () => {

    const navigate = useNavigate()
    const navigateShoppingCart = () => {
        navigate('boundleshoppingcart')
    }
    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand id="Navbar-Brand" as={Link} to='/' href="/">foundesk  <img id="Navbar-img" src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/coursescategories' href="/coursescategories">Categorias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to='/courses' href="/courses/Todos">
                                    Cursos online
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/dashboards' href="/dashboards">Dashboards</Nav.Link>
                            <Nav.Link as={Link} to='/controller' href="/controller">Controller</Nav.Link>
                            <Nav.Link as={Link} to='/about' href="/about">Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={navigateShoppingCart} id='courses-cards-button-shopping' variant='light'>
                        <img src={ShoppingCartImg} />
                        {shoppingCount > 0 ?
                        <Badge bg="secondary" position="top-end" shape="rounded-pill">{shoppingCount}</Badge>  
                        : 
                        <Badge style={{ display: "none" }}>{shoppingCount}</Badge>
                        }                        
                    </Button>
                    <Button as={Link} to='/login' href='/login' variant="light">Ingresar</Button>
                    <Button as={Link} to='/diary' href="/diary" variant="primary">Agenda una demo</Button>
                </Container>
            </Navbar>

        </>
    );
}