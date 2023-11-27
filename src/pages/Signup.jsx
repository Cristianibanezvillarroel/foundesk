import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Alert } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const Signup = () => {

  const [show, setShow] = useState(false)
  const [message, setMessage] = useState()
  const [userCount, setUserCount] = useState([])

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

  useEffect(() => {
    setTimeout(() => {
      fetchGetUser()
    }, 100);
  }, [])

  const url = 'https://api-foundesk.onrender.com/v1/user';

  const fetchGetUser = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json();

    const ListFiltrada = responseData.map(List => List.items.map(
      item => item
    ))

    setUserCount(ListFiltrada[0])
    console.log(ListFiltrada[0])
  }

  const id = userCount.length + 1;

  const urlSignup = 'https://api-foundesk.onrender.com/v1/user/signup';
  const fetchSignup = async () => {
    const response = await fetch(urlSignup, {
      method: 'POST',
      body: JSON.stringify({
        email: valueEmail.trim(),
        name: valueName,
        password: valuePassword,
        idItem: id
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
