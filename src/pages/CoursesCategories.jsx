import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ListContentsCoursesCategories } from '../components/ListContentsCoursesCategories.js'
import { CoursesCategoriesAccordion } from '../components/courses/CoursesCategoriesAccordion.jsx'


export const CoursesCategories = () => {

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
  }
  console.log(responseData)

  return (
    <Container className='courses-categories'>
      {responseData.map(content =>
        <Row>
          <Col>
            <CoursesCategoriesAccordion category={content.category} detail={content.detail} id={content.id} />
          </Col>
        </Row>
      )}
    </Container>

  )
}

