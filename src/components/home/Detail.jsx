import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { DetailImg } from './DetailImg'
import { DetailText } from './DetailText'

export const Detail = () => {
  return (
    <>
      <div id='detail-up-llamado'>
        <p>La plataforma que te permitirá desarrollar tus capacidades en un solo lugar.</p>
      </div>
      <div id='detail-bajada'>
        <p>Con Foundesk, eleva tu potencial al siguiente nivel de una forma fácil y sencilla.</p>
      </div>
      <div id='detail-button'>
        <Button variant='primary'>Cursos</Button>{''}
        <Button variant='light'>Dashboard</Button>{''}
        <Button variant='light'>Archivos</Button>{''}
      </div>
      <div id='detail-text'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <DetailImg />
            </Col>
            <Col md={6} className='mb-4'>
              <DetailText />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
