import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'

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

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)
        console.log(dataObject)
    }

    if (token) {
        return (
            <>
                <Container>
                    <Row >
                        <div id='profile-pages-title'>
                            Mi Perfil
                        </div>
                    </Row>
                    <hr/>
                    <Row>
                        <Form onSubmit={onSubmit}>
                            <div class="form-group">
                                <label for="pwd1">Contraseña Actual:</label>
                                <Form.Control type="password" id="pwd1" name="pwd1" placeholder="Escriba su contraseña actual" />
                            </div>
                            <div class="form-group">
                                <label for="pwd2">Nueva Contraseña:</label>
                                <Form.Control type="password" id="pwd2" name="pwd2" placeholder="Escriba su nueva contraseña" />
                            </div>
                            <div class="form-group">
                                <label for="pwd3">Confirmar Nueva Contraseña:</label>
                                <Form.Control type="password" id="pwd3" name="pwd3" placeholder="Confirme su nueva contraseña" />
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </Form>
                    </Row>
                    <hr style={{ padding: '0 !important' }} />
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
