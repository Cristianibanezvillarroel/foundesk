import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Alert } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { signupService, userService } from '../services/user';
import UserContext from '../context/User/UserContext';

export const Signup = () => {

  const userCtx = useContext(UserContext)
  const { registerUser } = userCtx
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

  /*useEffect(() => {
    setTimeout(() => {
      fetchGetUser()
    }, 100);
  }, [])

  const fetchGetUser = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await userService(dataService)

    const ListFiltrada = responseData.map(List => List.items.map(
      item => item
    ))

    setUserCount(ListFiltrada[0])
    console.log(ListFiltrada[0])
  }

  const id = userCount.length + 1;*/

  const fetchSignup = async () => {

    try {

      /*const dataService = {
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
      }*/

      const dataService = {
        email: valueEmail.trim(),
        name: valueName,
        password: valuePassword
      }
      
      const signupUser = registerUser(dataService)

    } catch (error) {

      console.log(error)

    }

    /*const dataService = {
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
    }
    const responseData = await signupService(dataService)

    console.log(responseData)
    setMessage(responseData.message)
    setShow(true);*/
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
          <Form onSubmit={fetchSignup}>
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
            <Button type="submit" id='button-login' className='mb-4' variant='primary'>
              Signup
            </Button>
          </Form>
          <Col md={12} className='login-text'>
            ¿Ya tiene una cuenta registrada?
            <Link className='login-text' to='/login'>   Login</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}
