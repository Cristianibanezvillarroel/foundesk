import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/User/UserContext'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { updatePasswordService, updateService } from '../services/user'

export const Profile = () => {
    const ctx = useContext(UserContext)
    const { updateDataUser, updatePasswordUser } = ctx
    const { _id, name, lastname, address, city, country, phone, email } = ctx.user
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

    const [dataService, setDataService] = useState({
        name: "",
        lastname: "",
        city: "",
        country: "",
        address: "",
        phone: ""
    })

    const [dataServicePassword, setDataServicePassword] = useState({
        email: email,
        password: "",
        newpassword: "",
        id: _id
    })

    const handleChangePassword = async (event) => {

        setDataServicePassword({
            ...dataServicePassword,
            [event.target.name]: event.target.value
        })

    }

    const handleChange = async (event) => {

        setDataService({
            ...dataService,
            [event.target.name]: event.target.value
        })

    }

    const onSubmit = async (e) => {
        e.preventDefault()
        /*const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)*/

        if (dataServicePassword.newpassword === dataServicePassword.pwd3) {
            /*const dataService = {
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
            const dataService = {
                email: email,
                password: dataObject.pwd1,
                newpassword: dataObject.pwd2,
                id: _id
            }*/

            try {
                const responseData = await updatePasswordUser(dataServicePassword)

                setUpdateMessage('Su contraseña ha sido modificada con exito')
                setUpdateShow(true)
            } catch (error) {
                console.log(error)

            }

        } else {
            return alert('No coinciden las nuevas contraseñas')
        }
    }

    const saveProfile = (e) => {
        e.preventDefault()
        /*const formData = new FormData(e.target)
        const dataObject = Object.fromEntries(formData)

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
        }*/
        /*const dataService = {
                name: dataObject.name,
                lastname: dataObject.lastname,
                city: dataObject.city,
                country: dataObject.country,
                address: dataObject.address,
                phone: dataObject.phone,
                id: _id
        }
        setDataService({
            ...dataService,
            name: dataObject.name,
            lastname: dataObject.lastname,
            city: dataObject.city,
            country: dataObject.country,
            address: dataObject.address,
            phone: dataObject.phone,
            id: _id
        })*/

        try {
            const responseData = updateDataUser(dataService)
            setUpdateMessage('Datos actualizados')
            setUpdateShow(true)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        const updateData = () => {

            return setDataService({
                ...dataService,
                name,
                lastname,
                country,
                address,
                city,
                phone,
                email,
                _id
            })
        }

        updateData()

    }, [])

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
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Row>
                            <Col md={4}>
                                <div class="form-group">
                                    <label for="pwd1">Contraseña Actual:</label>
                                    <input type='password' class="form-control"
                                        name='password'
                                        value={dataServicePassword.pwd1}
                                        onChange={(e) => { handleChangePassword(e) }}
                                    />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="form-group">
                                    <label for="pwd2">Nueva Contraseña:</label>
                                    <input type='password' class="form-control"
                                        name='newpassword'
                                        value={dataServicePassword.pwd2}
                                        onChange={(e) => { handleChangePassword(e) }}
                                    />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div class="form-group">
                                    <label for="pwd3">Confirmar Nueva Contraseña:</label>
                                    <input type='password' class="form-control"
                                        name='pwd3'
                                        value={dataServicePassword.pwd3}
                                        onChange={(e) => { handleChangePassword(e) }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button variant='success' type="submit">Cambiar contraseña</Button>
                    </Form>
                </Row>
                <hr />
                <Row>
                    <Form onSubmit={(e) => saveProfile(e)}>
                        <Row>
                            <Col md={6}>
                                <div class="form-group">
                                    <label for="name">Nombre</label>
                                    <input type='text' class="form-control"
                                        name='name'
                                        value={dataService.name}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="form-group">
                                    <label for="lastname">Apellido</label>
                                    <input type='text' class="form-control"
                                        name='lastname'
                                        value={dataService.lastname}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div class="form-group">
                                    <label for="address">Direccion</label>
                                    <input type='text' class="form-control"
                                        name='address'
                                        value={dataService.address}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="form-group">
                                    <label for="city">Ciudad</label>
                                    <input type='text' class="form-control"
                                        name='city'
                                        value={dataService.city}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div class="form-group">
                                    <label for="country">Pais</label>
                                    <input type='text' class="form-control"
                                        name='country'
                                        value={dataService.country}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="form-group">
                                    <label for="phone">Telefono</label>
                                    <input type='text' class="form-control"
                                        name='phone'
                                        value={dataService.phone}
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button variant='success' type="submit">Guardar Datos</Button>
                    </Form>
                </Row>
            </Container>
        </>
    )
}
