import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TemplatesMenu } from '../components/templates/TemplatesMenu'
import { TemplatesData } from '../components/templates/TemplatesData'

export const Templates = () => {

  const [templatesMenuValue, setTemplatesMenuValue] = useState('Comercial')

  const onAddTemplatesMenu = (templatesMenuValue) => {
    setTemplatesMenuValue(templatesMenuValue)
  }

  const [dataTemplates, setDataTemplates] = useState([])

  useEffect(() => {
      setTimeout(() => {
          getData()
      }, 100);
  }, [])

  const getData = async () => {

      const url = 'https://api-foundesk.onrender.com/db/templates';
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
          }
      })
      const responseData = await response.json()

      const ListFiltrada = responseData.filter(List => {
          return List.categoria == templatesMenuValue;
      })
      setDataTemplates(ListFiltrada)
  }
  
  return (
    <Container>
     <Row>
      <Col md={2} className='mb-4 mt-4' >
        <TemplatesMenu onAddTemplatesMenu={onAddTemplatesMenu}/>        
      </Col>
      <Col className='dashboard-data-grid'>
        <TemplatesData templatesMenuValue={templatesMenuValue} dataTemplates={dataTemplates}/>
      </Col>
      </Row>   
    </Container>
    
  )
}
