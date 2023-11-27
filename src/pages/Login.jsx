import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
    <Container className='login-grid'>
        <Row>
            <Col md={12} id='login-title' className='mb-4'>
                Login
            </Col>
            <Col md={12} className='mb-4'>
            <Form.Control type="text" placeholder="Email" />
            </Col>
            <Col>
            <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col md={12} className='login-text' id='login-forgot' >
            ¿Olvidó su password?
            </Col>
            <Button md={2} id='button-login' className='mb-4' variant='primary'>
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
