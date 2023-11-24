import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ControllerMenu } from '../components/controller/ControllerMenu'
import { ControllerData } from '../components/controller/ControllerData'
import { useParams } from 'react-router-dom'

export const Controller = () => {

  const {category} = useParams()
  const [controllerMenuValue, setControllerMenuValue] = useState(category ? category : 'tributarios')

  const onAddControllerMenu = (controllerMenuValue) => {
    setControllerMenuValue(controllerMenuValue)
  }
  return (
    <Container>
     <Row>
      <Col md={2} className='mb-4'>
        <ControllerMenu onAddControllerMenu={onAddControllerMenu} controllerMenuValue={controllerMenuValue}/>        
      </Col>
      <Col className='dashboard-data-grid'>
        <ControllerData controllerMenuValue={controllerMenuValue}/>
      </Col>
      </Row>   
    </Container>    
  )
}
