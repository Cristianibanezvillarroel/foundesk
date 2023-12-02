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
import { UserContext } from '../context/UserContext';


export const BoundleNavBar = () => {

    const navigate = useNavigate()
    const navigateShoppingCart = () => {
        navigate('/boundleshoppingcart')
    }

    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
    const { token, setToken } = useContext(UserContext)
    const clearStorage = () => {
        localStorage.removeItem('shoppingList')
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand id="Navbar-Brand" as={Link} to='/' href="/">foundesk  <img id="Navbar-img" src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/boundlecourses' href="/boundlecourses/Todos">
                                    Cursos online
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/boundledashboards' href="/boundledashboards">Desempeño</Nav.Link>
                            <Nav.Link as={Link} to='/boundlecontroller' href="/boundlecontroller">Controller</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={navigateShoppingCart} id='courses-cards-button-shopping' variant='light'>
                        <img src={ShoppingCartImg} />
                        <Badge bg="secondary">{shoppingCount}</Badge>
                    </Button>
                    <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/courses' href="/courses/Todos">
                            Mi Perfil
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { setToken(null), clearStorage(), setShoppingCount(null) }} as={Link} to='/' href="/">
                            Cerrar Sesión
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>

        </>
    );
}