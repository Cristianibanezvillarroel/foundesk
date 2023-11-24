import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TemplatesMenu } from '../components/templates/TemplatesMenu'
import { TemplatesData } from '../components/templates/TemplatesData'

export const Templates = () => {

  const [templatesMenuValue, setTemplatesMenuValue] = useState('Comercial')

  const onAddTemplatesMenu = (templatesMenuValue) => {
    setTemplatesMenuValue(templatesMenuValue)
  }

    
  return (
    <Container>
     <Row>
      <Col md={2} className='mb-4 mt-4' >
        <TemplatesMenu onAddTemplatesMenu={onAddTemplatesMenu}/>        
      </Col>
      <Col className='dashboard-data-grid'>
        <TemplatesData templatesMenuValue={templatesMenuValue}/>
      </Col>
      </Row>   
    </Container>
    
  )
}
