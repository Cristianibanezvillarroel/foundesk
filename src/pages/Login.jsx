import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export const Login = () => {
  return (
    <>
    <Container>
        <Row>
            <Col>
                Login
            </Col>
            <Col>
            <Form.Control type="text" placeholder="Email" />
            <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col>
            ¿Olvidó su password?
            </Col>
            <Button variant='primary'>
                Login
            </Button>
            <Col>
            ¿No tiene una cuenta registrada? Signup
            </Col>
        </Row>
    </Container>
    </>
  )
}
