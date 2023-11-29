import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row, Alert } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { loginService } from '../services/user';
import { UserContext } from '../context/UserContext';

export const Login = () => {

  const { token, setToken } = useContext(UserContext)
  console.log(token)

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

      const dataService = {
        method: 'POST',
        body: JSON.stringify({
          email: valueEmail.trim(),
          password: valuePassword
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }

      const responseData = await loginService(dataService)

      console.log(responseData)
      setMessage(responseData.message)
      if (responseData.message == 'OK') {
        setShow(true);
      } else {
        setInvalid(true);
      }

    } catch (error) {
      console.log(error)

    }

  }

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

  if (invalid) {
    return (
      <div className="App">
        <Container className='p-4'>
          <Alert variant="success" onClose={() => setInvalid(false)} dismissible >
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
          <Col md={12} id='login-title' className='mb-4'>
            Login
          </Col>
          <Col md={12} className='mb-4'>
            <Form.Control onChange={handleChangeEmail} type="text" placeholder="Email" />
          </Col>
          <Col>
            <Form.Control onChange={handleChangePassword} type="password" placeholder="Password" />
          </Col>
          <Col md={12} className='login-text' id='login-forgot' >
            ¿Olvidó su password?
          </Col>
          <Button onClick={fetchLogin} md={2} id='button-login' className='mb-4' variant='primary'>
            Login
          </Button>
          <Col md={12} className='login-text'>
            ¿No tiene una cuenta registrada?
            <Link className='login-text' to='/signup'>   Signup</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}
