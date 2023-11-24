import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ListContentsCoursesCategories } from '../components/ListContentsCoursesCategories.js'
import { CoursesCategoriesAccordion } from '../components/courses/CoursesCategoriesAccordion.jsx'



export const CoursesCategories = () => {

  const [dataCategories, setDataCategories] = useState([])

  useEffect(() => {
    setTimeout(() => {
      responseCategories()
    }, 1000);
  }, [])

  const url = 'https://api-foundesk.onrender.com/db/coursescategories';

  const responseCategories = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json();
    /*const ListFiltrada = responseData.filter(List => {
      return List.id >= 0

    })*/
    setDataCategories({ responseData })
  }

  return (
    <Container className='courses-categories'>
      {dataCategories.map(content =>
        <Row>
          <Col>
            <CoursesCategoriesAccordion category={content.category} detail={content.detail} id={content.id} />
          </Col>
        </Row>
      )}
    </Container>

  )
}

