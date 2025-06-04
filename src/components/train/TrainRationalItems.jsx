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
                        <div id='teach-rational-item-title'>Kit Herramientas</div>
                        <div>Podrás utilizar herramientas de capacitación que hemos creado especialmente para este propósito y que han probado ser eficaces para el aprendizaje en linea.</div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div><img src={TrainRationalFlowImg} /></div>
                        <div id='teach-rational-item-title'>Mayor Fluidez</div>
                        <div>Aplica Diseño Instruccional a la capacitación que tú y tus colaboradores necesitan y logra aprendizaje valiosos para tu emprendimiento.</div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div><img src={TrainRationalAsistanceImg} /></div>
                        <div id='teach-rational-item-title'>Acompañado siempre</div>
                        <div>Recibirás toda nuestra colaboración para que logres avanzar de manera rápida y sencilla. Te asistiremos en todo el proceso.</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
