import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const TeachStart = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className='mb-4'>
                        <div className='teach-start-llamado'>Conviértete en instructor ahora</div>
                    </Col>
                    <Col md={12} className='mb-4'>
                        <div className='teach-start-bajada'>Únete a la red de instructores para la pyme más grande de Chile.</div>
                    </Col>
                    <Col className='teach-start-button' md={12}>
                        <Button variant='secondary'>Comenzar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
