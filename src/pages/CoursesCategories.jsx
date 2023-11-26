import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CoursesCategoriesAccordion } from '../components/courses/CoursesCategoriesAccordion.jsx'



export const CoursesCategories = () => {

  const [dataCategories, setDataCategories] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 100);
  }, [])

  const url = 'https://api-foundesk.onrender.com/v1/coursescategories';

  const getDataV1 = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json();

    const ListFiltrada = responseData.items.map(item => item)


    setDataCategories(ListFiltrada)
    console.log(ListFiltrada)
  }

  

  /*const responseCategories = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json();
    setDataCategories(responseData)
  }*/

  return (
    <Container className='courses-categories'>
      {dataCategories.map(content =>
        <Row>
          <Col>
            <CoursesCategoriesAccordion categoria={content.categoria} idItem={content.idItem} />
          </Col>
        </Row>
      )}
    </Container>

  )
}

