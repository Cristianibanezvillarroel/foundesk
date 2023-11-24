import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { DetailImg } from './DetailImg'
import { DetailText } from './DetailText'

export const Detail = () => {

  const [detailSelect, setDetailSelect] = useState('curses');
  return (
    <>
      <div id='detail-up-llamado'>
        <p>La plataforma para desarrollar tus capacidades en un solo lugar.</p>
      </div>
      <div id='detail-bajada'>
        <p>Con Foundesk, eleva tu potencial al siguiente nivel de una forma fácil y sencilla.</p>
      </div>
      <div id='detail-button'>
        <Button onClick={() => setDetailSelect('curses')} variant={detailSelect == 'curses' ? 'primary': 'light'}>Desarrollo</Button>{''}
        <Button onClick={() => setDetailSelect('dashboard')} variant={detailSelect == 'dashboard' ? 'primary': 'light'}>Desempeño</Button>{''}
        <Button onClick={() => setDetailSelect('controller')} variant={detailSelect == 'controller' ? 'primary': 'light'}>Control</Button>{''}
      </div>
      <div id='detail-text'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <DetailImg detailSelect={detailSelect} />
            </Col>
            <Col md={6} className='mb-4'>
              <DetailText detailSelect={detailSelect} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
