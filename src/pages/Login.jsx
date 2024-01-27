import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Alert } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../context/User/UserContext';

export const Login = () => {

  const userCtx = useContext(UserContext)
  const { loginUser, token, msg, logoutUser } = userCtx

  const navigate = useNavigate()
  const location = useLocation()

  const [show, setShow] = useState(false)
  const [message, setMessage] = useState()
  const [invalid, setInvalid] = useState(false)

  const [valueEmail, setValueEmail] = useState('')
  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
  }

  const [valuePassword, setValuePassword] = useState('')
  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
  }

  const fetchLogin = async () => {
    try {

      /*const dataService = {
        method: 'POST',
        body: JSON.stringify({
          email: valueEmail.trim(),
          password: valuePassword
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }*/
      const dataService = {
        email: valueEmail.trim(),
        password: valuePassword
      }

      const getLogin = loginUser(dataService)

      //const responseData = await loginUser(dataService)

      /*console.log(responseData)
      console.log(responseData.detail.token)
      setMessage(responseData.message)
      if (responseData.message == 'OK') {
        const dataUser = responseData.detail.user
        delete dataUser.password
        console.log(dataUser)
        setUser(dataUser)
        setToken(responseData.detail.token)
      } else {
        setInvalid(true);
      }*/

    } catch (error) {
      console.log(error)

    }
    console.log(`el location registrado por useLocation es:${location.pathname}`)

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

  return (
    <>
      <Container className='login-grid'>
        <Row>
          <Form onSubmit={fetchLogin}>
            <Col md={12} id='login-title' className='mb-4'>
              Login
            </Col>
            <Col md={12} className='mb-4'>
              <Form.Control onChange={handleChangeEmail} type="text" placeholder="Email" />
            </Col>
            <Col>
              <Form.Control onChange={handleChangePassword} type="password" placeholder="Password" />
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
