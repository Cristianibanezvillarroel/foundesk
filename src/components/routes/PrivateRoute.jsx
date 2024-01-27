import { useContext, useEffect, useState } from "react"
import UserContext from "../../context/User/UserContext"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Button, Modal } from "react-bootstrap"

const PrivateRoute = ({ element: Component, ...props }) => {

    const userCtx = useContext(UserContext)
    const { authStatus, verifyingToken } = userCtx
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const navigateHome = () => {
        navigate('/')
    }

    //<Navigate to="/login" />

    useEffect(() => {
        const fetchUser = async () => {
            await verifyingToken()
            setLoading(false)
        }
        fetchUser()
    }, [authStatus])

    return (
        <>
            <Routes>
                <Route {...props} element={authStatus ?
                    Component
                    :
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header>
                            <Modal.Title>Acceso</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ textAlign: 'center' }}>
                            Usted debe iniciar sesion para dirigirse a esa ruta.
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
                } />
            </Routes>
        </>
    )
}

export default PrivateRoute