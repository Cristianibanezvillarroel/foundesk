import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ListContentsCoursesCategories } from '../components/ListContentsCoursesCategories.js'
import { CoursesCategoriesAccordion } from '../components/courses/CoursesCategoriesAccordion.jsx'


export const CoursesCategories = () => {

  return (
    <Container className='courses-categories'>
      {ListContentsCoursesCategories.map(content =>
        <Row>
          <Col>
            <CoursesCategoriesAccordion category={content.category} detail={content.detail} id={content.id}/>
          </Col>
        </Row>
      )}
    </Container>

  )
}

