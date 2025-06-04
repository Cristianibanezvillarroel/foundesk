import React, { useState } from 'react'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { TrainDetailText } from './TrainDetailText'
import { TrainDetailImg } from './TrainDetailImg'

export const TrainDetail = () => {

  const [trainDetailSelect, setTrainDetailSelect] = useState('videos');
  return (
    <>
      <div id='teach-detail-up-llamado'>
        <p>Comienza ya.</p>
      </div>
      <div id='teach-detail-bajada'>
        <p>Con Foundesk, capacitar es rápido y eficaz.</p>
      </div>
      <div className='teach-detail-button'>
        <Nav fill variant='tabs' defaultActiveKey='link-1'>
            <Nav.Item>
                <Nav.Link eventKey='link-1' onClick={() => setTrainDetailSelect('videos')}>Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-2' onClick={() => setTrainDetailSelect('tutoriales')}>Tutoriales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-3' onClick={() => setTrainDetailSelect('faq')}>FAQ</Nav.Link>
            </Nav.Item>
        </Nav>
      </div>
      <div id='detail-text'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <TrainDetailText trainDetailSelect={trainDetailSelect} />
            </Col>
            <Col md={6} className='mb-4'>
              <TrainDetailImg trainDetailSelect={trainDetailSelect} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}