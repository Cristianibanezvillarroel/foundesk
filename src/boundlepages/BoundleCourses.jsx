import React, { useState } from 'react'
import { Button, Container, Modal, Tab, Tabs } from 'react-bootstrap'
import { BoundleCoursesAll } from '../boundlecomponents/boundlecourses/BoundleCoursesAll'
import { useNavigate } from 'react-router-dom'

export const BoundleCourses = () => {
    const [key, setKey] = useState("Todos")
    const { token, setToken } = useContext(UserContext)
    const [show, setShow] = useState(false)
    const [handleModal, setHandleModal] = useState(true)
    const handleClose = () => setHandleModal(false);

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
                    Usted debe iniciar sesion para revisar la lista de sus cursos.
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
                    <div id='courses-head'>Cursos online </div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3">
                        <Tab eventKey="Todos" title="Todos">
                            Tab content for Home
                        </Tab>
                        <Tab eventKey="MisCursos" title="Mis Cursos">
                            Tab content for Profile
                        </Tab>
                    </Tabs>
                    {key == "Todos" ?
                        <BoundleCoursesAll />
                        :
                        <p>Mis cursos</p>
                    }
                </Container>
            </>
        )
    }
}
