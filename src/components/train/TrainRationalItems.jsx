import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrainRationalToolsImg from '/public/trainRationalTools.webp'
import TrainRationalFlowImg from '/public/trainRationalFlow.webp'
import TrainRationalAsistanceImg from '/public/trainRationalAsistance.png'

export const TrainRationalItems = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div><img src={TrainRationalToolsImg} /></div>
                        <div id='teach-rational-item-title'>Administra sin trabas</div>
                        <div>Con los cursos de Foundesk ya no dependerás de la disponibilidad y agenda para que te enseñen algo importante para la administración de tu emprendimiento.</div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div><img src={TrainRationalFlowImg} /></div>
                        <div id='teach-rational-item-title'>Fluidamente</div>
                        <div>Abordamos todas las actividades críticas comunes y cotidianas que enfrentarás en tu quehacer administrativo de una manera simple y por sobre todo práctica.</div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div><img src={TrainRationalAsistanceImg} /></div>
                        <div id='teach-rational-item-title'>Con conocimiento propio</div>
                        <div>Recibirás y aprenderás lo suficiente y necesario para lograr la libertad en el control de tu administración. Será tu propio conocimiento el que te permitirá avanzar.</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
