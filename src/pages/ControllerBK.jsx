import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TemplatesMenu } from '../components/controller/ControllerMenu'
import { TemplatesData } from '../components/controller/ControllerData'

export const Controller = () => {

  const [templatesCategory, setTemplatesCategory] = useState('Comercial')
  const [data, setData] = useState([])

  const onAddTemplatesMenu = (templatesCategoryValue) => {
    getData(templatesCategoryValue)
    setTemplatesCategory(templatesCategoryValue)
  }

  useEffect(() => {
    setTimeout(() => {
      getData(templatesCategory)
    }, 10);
  }, [])

  const getData = async (templatesCategory) => {

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
      return List.categoria == templatesCategory
    })
    setData({ ListFiltrada })
  }


  return (
    <Container>
      <Row>
        <Col md={2} className='mb-4 mt-4' >
          <TemplatesMenu onAddTemplatesMenu={onAddTemplatesMenu} />
        </Col>
        <Col className='dashboard-data-grid'>
          <TemplatesData templatesCategory={templatesCategory} data={data} />
        </Col>
      </Row>
    </Container>

  )
}
