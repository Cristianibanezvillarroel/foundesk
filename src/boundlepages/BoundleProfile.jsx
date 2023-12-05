import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'

export const BoundleProfile = () => {
    const { token, setToken } = useContext(UserContext)
    const [show, setShow] = useState(null)
    const handleClose = () => setShow(false)
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateHome = () => {
        navigate('/')
    }

    if (token) {
        return (
            <>
                <Container>
                    <Row id='profile-pages-title'>
                        Mi Perfil
                    </Row>
                    <hr />
                    <Row>
                        Sector Contraseña
                    </Row>
                    <hr />
                    <Row>
                        Sector Datos Personales
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
                    Usted debe iniciar sesion para ir al perfil.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={navigateLogin}>
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
