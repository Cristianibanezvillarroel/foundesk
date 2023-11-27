import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

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
            <Col md={12} id='login-text' className='mb-4'>
            ¿Olvidó su password?
            </Col>
            <Button md={2} className='mb-4' variant='primary'>
                Login
            </Button>
            <Col md={12} id='login-text' className='mb-4'>
            ¿No tiene una cuenta registrada? Signup
            </Col>
        </Row>
    </Container>
    </>
  )
}
