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

    const ListFiltrada = responseData.map(List => List.items.map(
      item => item
    ))

    let itemsArray = ListFiltrada[0]
    setDataCategories(itemsArray)
    console.log(itemsArray)
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
            <CoursesCategoriesAccordion content={content} />
          </Col>
        </Row>
      )}
    </Container>

  )
}

