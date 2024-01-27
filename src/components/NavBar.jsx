import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/public/logo_ft.png';
import ShoppingCartImg from '/public/shoppingcart.png'
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../context/Shopping/ShoppingContext'
import UserContext from '../context/User/UserContext';


export const NavBar = () => {

    const navigate = useNavigate()
    const navigateShoppingCart = () => {
        navigate('/shoppingcart')
    }
    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
    const ctx = useContext(UserContext)
    const { user, logoutUser } = ctx
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)
    const [dataUser, setDataUser] = useState({
        name: "",
        lastname: ""
    })

    const navigateLogin = () => {
        navigate('/login')
    }

    useEffect(() => {
        ShoppingListStart()

    }, [])

    const ShoppingListStart = async () => {
        let shoppingList = []
        const ShoppingListGet = await localStorage.getItem('shoppingList')
        console.log(ShoppingListGet)
        if (ShoppingListGet === null) {
            console.log('storage vacio')
            setShoppingCount(0)
        } else {
            console.log('storage con registros')
            shoppingList = JSON.parse(ShoppingListGet)
            let shoppingListSize = shoppingList.length
            setShoppingCount(shoppingListSize)
        }
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand id="Navbar-Brand" as={Link} to='/' href="/">foundesk  <img id="Navbar-img" src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {user ? (
                        <>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="Aprende" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to='/coursescategories' href="/coursescategories">Categorias</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to='/courses' href="/courses/Todos">
                                            Cursos online
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to='/teach' href="/teach">Crea</Nav.Link>
                                    <Nav.Link as={Link} to='/train' href="/train">Publica</Nav.Link>

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
                            <NavDropdown title={user.name} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/profile' href="/profile">
                                    Mi Perfil
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => { logoutUser() }} as={Link} to='/' href="/">
                                    Cerrar Sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>

                    ) : (
                        <>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="Aprende" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to='/coursescategories' href="/coursescategories">Categorias</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to='/courses' href="/courses/Todos">
                                            Cursos online
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to='/teach' href="/teach">Enseña en Foundesk</Nav.Link>
                                    <Nav.Link as={Link} to='/train' href="/train">Capacita con Foundesk</Nav.Link>
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

                        </>
                    )}
                </Container >
            </Navbar >

        </>
    );
}