import React, { useState } from 'react'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { TeachDetailText } from './TeachDetailText'
import { TeachDetailImg } from './TeachDetailImg'

export const TeachDetail = () => {

  const [teachDetailSelect, setTeachDetailSelect] = useState('create');
  return (
    <>
      <div id='teach-detail-up-llamado'>
        <p>Como comenzar ahora.</p>
      </div>
      <div id='teach-detail-bajada'>
        <p>Con Foundesk, enseña de una forma fácil y sencilla.</p>
      </div>
      <div className='teach-detail-button'>
        <Nav fill variant='tabs' defaultActiveKey='link-1'>
            <Nav.Item>
                <Nav.Link eventKey='link-1' onClick={() => setTeachDetailSelect('create')}>Crea</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-2' onClick={() => setTeachDetailSelect('save')}>Graba</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-3' onClick={() => setTeachDetailSelect('show')}>Publica</Nav.Link>
            </Nav.Item>
        </Nav>
      </div>
      <div id='detail-text'>
        <Container>
          <Row>
            <Col md={6} className='mb-4'>
              <TeachDetailText teachDetailSelect={teachDetailSelect} />
            </Col>
            <Col md={6} className='mb-4'>
              <TeachDetailImg teachDetailSelect={teachDetailSelect} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}