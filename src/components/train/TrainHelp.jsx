import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TeachHelpYou from '/public/teachHelpYou.webp'
import TeachHelpFollow from '/public/teachHelpFollow.webp'

export const TrainHelp = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md={3} className='mb-4'>
                    <img className='teach-help-img' src={TeachHelpYou}></img>
                </Col>
                <Col md={6} className='mb-4'>
                    <h1 className='teach-help-llamado'>Te acompañamos en todo el proceso.</h1>
                    <p className='teach-help-bajada'>Nuestro equipo de asistencia al instructor está aquí para responder a tus preguntas y revisar tu vídeo de prueba, mientras que nuestro Teaching Center te ofrece numerosos recursos para ayudarte a lo largo del proceso. Además, recibe la ayuda de instructores con experiencia en nuestras comunidades en línea.</p>
                    <p className='teach-help-link'>¿necesitas conocer más detalles antes de iniciar tu aventura como instructor en Foundesk? Haz clic aquí para más información.</p>
                </Col>
                <Col md={3} className='mb-4'>
                    <img className='teach-help-img' src={TeachHelpFollow}></img>
                </Col>
            </Row>
        </Container>            
        </>
    )
}
