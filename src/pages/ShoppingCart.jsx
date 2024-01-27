import React, { useContext, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import UserContext from '../context/User/UserContext'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartList } from '../components/shoppingcart/ShoppingCartList'
import { ShoppingCartSummary } from '../components/shoppingcart/ShoppingCartSummary'

export const ShoppingCart = () => {
    const ctx = useContext(UserContext)
    const { logoutUser } = ctx
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateHome = () => {
        navigate('/')
    }
    if (ctx.user) {
        return (
            <>
                <Container>
                    <Row id='shopping-cart-pages-title'>
                        Carro de Compra
                    </Row>
                    <Row>
                        <Col md={6} className='mb-4'>
                            <ShoppingCartList />
                        </Col>
                        <Col md={6} className='mb-4'>
                            <ShoppingCartSummary />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    } else {
        return (
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Acceso</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    Usted debe iniciar sesion para ir al carro de compras.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={logoutUser}>
                        Iniciar Sesion
                    </Button>
                    <Button variant="secondary" onClick={navigateHome}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
