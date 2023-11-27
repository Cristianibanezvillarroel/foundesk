import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export const Signup = () => {
  return (
    <>
    <Container className='login-grid'>
        <Row>
            <Col md={12} id='login-title' className='mb-4'>
                Signup
            </Col>
            <Col md={12} className='mb-4'>
            <Form.Control type="text" placeholder="Nombre" />
            </Col>
            <Col md={12} className='mb-4'>
            <Form.Control type="text" placeholder="Email" />
            </Col>
            <Col>
            <Form.Control type="password" placeholder="Crear Password" />
            </Col>
            <Col>
            <Form.Control type="password" placeholder="Confirmar Password" />
            </Col>
            <Button md={2} className='mb-4' variant='primary'>
                Signup
            </Button>
            <Col md={12} id='login-text' className='mb-4'>
            ¿Ya tiene una cuenta registrada? Login
            </Col>
        </Row>
    </Container>
    </>
  )
}
