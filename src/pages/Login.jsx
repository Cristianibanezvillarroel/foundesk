import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Alert } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../context/User/UserContext';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

export const Login = () => {

  const userCtx = useContext(UserContext)
  const { loginUser, token, msg, logoutUser } = userCtx

  const navigate = useNavigate()
  const location = useLocation()

  const [show, setShow] = useState(false)
  const [message, setMessage] = useState()
  const [invalid, setInvalid] = useState(false)
  const [loading, setLoading] = useState(false)

  const [valueEmail, setValueEmail] = useState('')
  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
  }

  const [valuePassword, setValuePassword] = useState('')
  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
  }

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const fetchLogin = async (e) => {
    e.preventDefault();
    setInvalid(false);
    setShow(false);
    setMessage(undefined);
    setLoading(true);
    try {
      const dataService = {
        email: valueEmail.trim(),
        password: valuePassword
      };
      const response = await loginUser(dataService);
      // Si loginUser retorna un mensaje de error, puedes manejarlo aquí
      // Por ejemplo, si loginUser retorna false o un objeto con error
      if (response && response.message === 'OK') {
        setShow(true);
        setMessage('Login exitoso. Redirigiendo...');
        setLoading(false);
        navigate('/my-courses');
      } else {
        setInvalid(true);
        setMessage('Usuario o contraseña inválidos.');
        setLoading(false);
      }
    } catch (error) {
      setInvalid(true);
      setMessage('Error en el servidor. Intente nuevamente.');
      setLoading(false);
    }
  }

  useEffect(() => {

    console.log('hola')

  }, [msg])

  console.log(msg)


  if (show) {
    return (
      <div className="App">
        <Container className='p-4'>
          <Alert variant="success" onClose={() => setShow(false)} dismissible >
            <Alert.Heading>{message}</Alert.Heading>
            <p>
              Cierre esta ventana para volver al menu</p>
          </Alert>
        </Container>
      </div>
    );
  }

  if (msg) {
    return (
      <div className="App">
        <Container className='p-4'>
          <Alert variant="success" onClose={logoutUser} dismissible >
            <Alert.Heading>Su nombre de usuario o contraseña son invalidos.</Alert.Heading>
            <p>
              Cierre esta ventana para volver al menu</p>
          </Alert>
        </Container>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="spinner-border text-primary" role="status" style={{width: '4rem', height: '4rem'}}>
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Container className='login-grid'>
        <Row>
          <Form onSubmit={fetchLogin}>
            <Col md={12} id='login-title' className='mb-4'>
              Login
            </Col>
            <Col md={12} className='mb-4'>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={valueEmail}
                onChange={handleChangeEmail}
                autoComplete="email"
                required
              />
            </Col>
            <Col>
              <div style={{ position: 'relative' }}>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={valuePassword}
                  onChange={handleChangePassword}
                  autoComplete="current-password"
                  required
                />
                <span
                  onClick={toggleShowPassword}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2
                  }}
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </Col>

            <Button id='button-login' type="submit" className='mb-4' variant='primary'>
              Login
            </Button>
          </Form>
          <Col md={12} className='login-text'>
            ¿No tiene una cuenta registrada?
            <Link className='login-text' to='/signup'>   Signup</Link>
          </Col>
          <Col md={12} className='login-text' id='login-forgot' >
            ¿Olvidó su password?
          </Col>
        </Row>
      </Container>
    </>
  )
}
