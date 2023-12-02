import React, { useContext, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { BoundleShoppingCartList } from '../boundlecomponents/boundleshoppingcart/BoundleShoppingCartList'
import { BoundleShoppingCartSummary } from '../boundlecomponents/boundleshoppingcart/BoundleShoppingCartSummary'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const BoundleShoppingCart = () => {
    const { token, setToken } = useContext(UserContext)
    const [show, setShow] = useState(false)
    const [handleModal, setHandleModal] = useState(true)
    const handleClose = () => setHandleModal(false)
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }

    if (token) {
        setShow(true)
    } else {
        setShow(false)
    }

    if (!show) {
        return (
            <Modal onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Acceso</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    Usted debe iniciar sesion para ir al carro de compras.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={navigateLogin}>
                        Iniciar Sesion
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    if (show) {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6} className='mb-4'>
                            <BoundleShoppingCartList />
                        </Col>
                        <Col md={6} className='mb-4'>
                            <BoundleShoppingCartSummary />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
