import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Train = () => {

  return (
    <Container>
      <Row>
        <Col md={2} className='mb-4'>
          <h1>Train</h1>
        </Col>
        <Col className='dashboard-data-grid'>
          <h2>Train</h2>
        </Col>
      </Row>
    </Container>
  )
}
