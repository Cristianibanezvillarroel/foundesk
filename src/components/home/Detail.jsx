import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { DetailImg } from './DetailImg'
import { DetailText } from './DetailText'

export const Detail = () => {

  const [detailSelect, setDetailSelect] = useState('videos');
  return (
    <>
      <div id='detail-up-llamado'>
        <p>La plataforma para tu productividad en un solo lugar.</p>
      </div>
      <div id='detail-bajada'>
        <p>Con Foundesk, eleva tu productividad al siguiente nivel de una forma fácil y sencilla.</p>
      </div>
      <div id='detail-button'>
        <Button onClick={() => setDetailSelect('videos')} variant={detailSelect == 'videos' ? 'primary': 'light'}>Videos</Button>{''}
        <Button onClick={() => setDetailSelect('tutoriales')} variant={detailSelect == 'tutoriales' ? 'primary': 'light'}>Tutoriales</Button>{''}
        <Button onClick={() => setDetailSelect('faq')} variant={detailSelect == 'faq' ? 'primary': 'light'}>FAQ</Button>{''}
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
