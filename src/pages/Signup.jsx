import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const Signup = () => {

  const [show, setShow] = useState(false)
  const [message, setMessage] = useState()

  const [valueEmail, setValueEmail] = useState('')
  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
  }

  const [valueName, setValueName] = useState('')
  const handleChangeName = (e) => {
    setValueName(e.target.value);
  }

  const [valuePassword, setValuePassword] = useState('')
  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
  }

  const [valuePasswordConfirm, setValuePasswordConfirm] = useState('')
  const handleChangePasswordConfirm = (e) => {
    setValuePasswordConfirm(e.target.value);
  }

  const url = 'https://api-foundesk.onrender.com/v1/signup';

  const fetchSignup = async () => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: valueEmail,
        name: valueName,
        password: valuePassword
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json()
    console.log(responseData)
    setMessage(responseData.message)
    setShow(true);
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

  return (
    <>
      <Container className='login-grid'>
        <Row>
          <Col md={12} id='login-title' className='mb-4'>
            Signup
          </Col>
          <Col md={12} className='mb-4'>
            <Form.Control onChange={handleChangeName} type="text" placeholder="Nombre" />
          </Col>
          <Col md={12} className='mb-4'>
            <Form.Control onChange={handleChangeEmail} type="text" placeholder="Email" />
          </Col>
          <Col>
            <Form.Control onChange={handleChangePassword} type="password" placeholder="Crear Password" />
          </Col>
          <Col>
            <Form.Control onChange={handleChangePasswordConfirm} type="password" placeholder="Confirmar Password" />
          </Col>
          <Button onClick={fetchSignup} md={2} id='button-login' className='mb-4' variant='primary'>
            Signup
          </Button>
          <Col md={12} className='login-text'>
            ¿Ya tiene una cuenta registrada?
            <Link className='login-text' to='/login'>   Login</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}