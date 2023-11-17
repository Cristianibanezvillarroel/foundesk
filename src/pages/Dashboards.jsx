import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DashboardsMenu } from '../components/dashboard/DashboardsMenu'
import { DashboardsData } from '../components/dashboard/DashboardsData'

export const Dashboards = () => {
  return (
    <Container>
     <Row>
      <Col md={2} className='mb-4'>
        <DashboardsMenu />        
      </Col>
      <Col className='dashboard-data-grid'>
        <DashboardsData />
      </Col>
      </Row>   
    </Container>
    
  )
}
