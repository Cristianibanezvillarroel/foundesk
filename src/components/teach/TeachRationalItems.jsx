import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TeachHelpTeamImg from '/public/teachteam.webp'
import TeachHelpUsImg from '/public/teachhelpus.webp'
import TeachHelpYouImg from '/public/teachsuccess.webp'

export const TeachRationalItems = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div><img src={TeachHelpTeamImg} /></div>
                        <div id='teach-rational-item-title'>Ayuda a los demás</div>
                        <div>Son miles de emprendedores formales que necesitan capacitarse en como administrar su negocio. Y tú puedes ayudarles.</div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div><img src={TeachHelpUsImg} /></div>
                        <div id='teach-rational-item-title'>Amplia tu red</div>
                        <div>Tienes la posibilidad de agregar una nueva red de contactos con nosotros y así mejorar tu productividad y libertad financiera.</div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div><img src={TeachHelpYouImg} /></div>
                        <div id='teach-rational-item-title'>Recibe tu beneficio</div>
                        <div>Amplia tu alcance de colaboración y gana dinero por las suscripciones que generas a quienes reconocen el valor de tu conocimiento.</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
