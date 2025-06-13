import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { teacherService } from '../../services/teacher';
import { BsFillHeartPulseFill, BsPersonSquare, BsBank2, BsBookmarkCheck, BsPeopleFill, BsFillCollectionPlayFill, BsCheckSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const CoursesDetailTeachers = ({ content }) => {
  console.log('CoursesDetailTeachers content', content)
  let resultTeacher = content.map(({ teacher }) => teacher)

  return (
    <Container>
      <div className='courses-detail-teacher-title'>Instructor</div>
      {resultTeacher.map(
        teacherArray1 => teacherArray1.map(
          teacherArray2 => teacherArray2.map(
            item =>
              <>
                <Link to={`/teacher/${item._id}`}>
                <div id='courses-detail-teacher-name'>{item.name}</div>  
                </Link>                
                <div id='courses-detail-teacher-study'><BsCheckSquare />&nbsp;&nbsp;{item.career} - {item.careerinstitution} - {item.postgraduate} - {item.postgraduateinstitution}</div>
                <div id='courses-detail-teacher-content'>
                  <Row>
                    <Col md={6} className='mb-4'>
                      <img id='courses-detail-teacher-imagen' src={item.image} />
                    </Col>
                    <Col md={6} className='mb-4'>

                      <div id='courses-detail-teacher-data'><BsFillHeartPulseFill />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Años de Experiencia: {item.experience}</div>
                      <div id='courses-detail-teacher-data'><BsPersonSquare />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cargo: {item.jobtitle}</div>
                      <div id='courses-detail-teacher-data'><BsBank2 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empresa: {item.company}</div>
                      <div id='courses-detail-teacher-data'><BsBookmarkCheck />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valoraciones: {item.ratings}</div>
                      <div id='courses-detail-teacher-data'><BsPeopleFill />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estudiantes: {item.students}</div>
                      <div id='courses-detail-teacher-data'><BsFillCollectionPlayFill />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cursos: {item.courses}</div>

                    </Col>
                  </Row>
                </div>
                <div id='courses-detail-teacher-resena'>{item.review}</div>
              </>
          )
        )
      )}
    </Container>
  )
}
