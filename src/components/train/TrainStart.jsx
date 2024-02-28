import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const TrainStart = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className='mb-4'>
                        <div className='teach-start-llamado'>Hazlo simple y comienza hoy mismo</div>
                    </Col>
                    <Col md={12} className='mb-4'>
                        <div className='teach-start-bajada'>Súmate a la capacitación digital y logra resultados inmediatos para tus colaboradores y clientes.</div>
                    </Col>
                    <Col className='teach-start-button' md={12}>
                        <Button variant='secondary'>Comenzar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
