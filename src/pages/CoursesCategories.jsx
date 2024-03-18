import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CoursesCategoriesAccordion } from '../components/courses/CoursesCategoriesAccordion.jsx'
import { coursesCategoriesDetailService } from '../services/coursescategoriesdetail.js'


export const CoursesCategories = () => {

  const [dataCategories, setDataCategories] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 100);
  }, [])

  const getDataV1 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await coursesCategoriesDetailService(dataService)

    const ListFiltrada = responseData.map(List => List.items.map(
      item => item
    ))

    let itemsArray = ListFiltrada[0]
    setDataCategories(itemsArray)
  }

  return (
    <Container className='courses-categories'>
      {dataCategories.map(content =>
        <Row>
          <Col>
            <CoursesCategoriesAccordion content={content} />
          </Col>
        </Row>
      )}
    </Container>
  )
}

