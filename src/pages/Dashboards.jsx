import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DashboardsMenu } from '../components/dashboard/DashboardsMenu'
import { DashboardsData } from '../components/dashboard/DashboardsData'
import { useParams } from 'react-router-dom'

export const Dashboards = () => {

  const {category} = useParams()
  const [dashboardMenuValue, setDashboardMenuValue] = useState(category ? category : 'kpi')

  const onAddDashboardMenu = (dashboardMenuValue) => {
    setDashboardMenuValue(dashboardMenuValue)
  }
  return (
    <Container>
     <Row>
      <Col md={2} className='mb-4'>
        <DashboardsMenu onAddDashboardMenu={onAddDashboardMenu} dashboardMenuValue={dashboardMenuValue}/>        
      </Col>
      <Col className='dashboard-data-grid'>
        <DashboardsData dashboardMenuValue={dashboardMenuValue}/>
      </Col>
      </Row>   
    </Container>
    
  )
}
