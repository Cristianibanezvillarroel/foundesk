import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { updatePasswordService, updateService } from '../services/user'

export const BoundleProfile = () => {
    const { token, setToken, user, setUser } = useContext(UserContext)
    const [show, setShow] = useState(null)
    const [updateShow, setUpdateShow] = useState(false)
    const [updateMessage, setUpdateMessage] = useState(null)
    const handleCloseUpdate = () => setUpdateShow(false)
    const handleClose = () => setShow(false)
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateHome = () => {
        navigate('/')
    }

    let { _id, name, lastname, address, city, country, phone, email } = user

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)
        console.log(dataObject)

        if (dataObject.pwd2 === dataObject.pwd3) {
            const dataService = {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: dataObject.pwd1,
                    newpassword: dataObject.pwd2,
                    id: _id
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
            const responseData = await updatePasswordService(dataService)

            console.log(responseData)
            setUpdateMessage(responseData.message)
            setUpdateShow(true)

        } else {
            return alert('No coinciden las nuevas contraseñas')
        }
    }

    const saveProfile = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)
        console.log(dataObject)

        const dataService = {
            method: 'POST',
            body: JSON.stringify({
                name: dataObject.name,
                lastname: dataObject.lastname,
                city: dataObject.city,
                country: dataObject.country,
                address: dataObject.address,
                phone: dataObject.phone,
                id: _id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        const responseData = await updateService(dataService)

        console.log(responseData)
        setUpdateMessage(responseData.message)
        setUpdateShow(true)


    }

    if (updateShow) {
        return (
            <Modal show={updateShow} onHide={handleCloseUpdate} animation={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Actualizacion</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    {updateMessage}
                </Modal.Body>
            </Modal>
        )
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
                    <hr />
                    <Row>
                        <Form onSubmit={onSubmit}>
                            <Row>
                                <Col md={4}>
                                    <div class="form-group">
                                        <label for="pwd1">Contraseña Actual:</label>
                                        <Form.Control type="password" id="pwd1" name="pwd1" placeholder="" />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div class="form-group">
                                        <label for="pwd2">Nueva Contraseña:</label>
                                        <Form.Control type="password" id="pwd2" name="pwd2" placeholder="" />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div class="form-group">
                                        <label for="pwd3">Confirmar Nueva Contraseña:</label>
                                        <Form.Control type="password" id="pwd3" name="pwd3" placeholder="" />
                                    </div>
                                </Col>
                            </Row>
                            <Button variant='success' type="submit">Cambiar contraseña</Button>
                        </Form>
                    </Row>
                    <hr />
                    <Row>
                        <Form onSubmit={saveProfile}>
                            <Row>
                                <Col md={6}>
                                    <div class="form-group">
                                        <label for="name">Nombre</label>
                                        <Form.Control type="text" id="name" name="name" placeholder="" defaultValue={name} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div class="form-group">
                                        <label for="lastname">Apellido</label>
                                        <Form.Control type="text" id="lastname" name="lastname" defaultValue={lastname} placeholder="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div class="form-group">
                                        <label for="address">Direccion</label>
                                        <Form.Control type="text" id="address" name="address" defaultValue={address} placeholder="" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div class="form-group">
                                        <label for="city">Ciudad</label>
                                        <Form.Control type="text" id="city" name="city" defaultValue={city} placeholder="" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div class="form-group">
                                        <label for="country">Pais</label>
                                        <Form.Control type="text" id="country" name="country" defaultValue={country} placeholder="" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div class="form-group">
                                        <label for="phone">Telefono</label>
                                        <Form.Control type="text" id="phone" name="phone" defaultValue={phone} placeholder="" />
                                    </div>
                                </Col>
                            </Row>
                            <Button variant='success' type="submit">Guardar Datos</Button>
                        </Form>
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
