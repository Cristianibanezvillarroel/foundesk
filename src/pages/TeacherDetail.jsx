import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { teacherService } from '../services/teacher'
import { coursesService } from '../services/courses'
import { CoursesDetailMoreTeacherCoursesCard } from '../components/coursesdetail/CoursesDetailMoreTeacherCouresCard'

export const TeacherDetail = () => {

  const { id } = useParams()
  const [arrayItems, setArrayItems] = useState([])
  const [arrayCourses, setArrayCourses] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const getDataV1 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await teacherService(dataService)

    const ArrayItemsFilter = responseData.map(
      List => List.items.filter(
        item => item._id == id
      )
    )

    let itemsArray = ArrayItemsFilter[0]
    setArrayItems(itemsArray)

    const responseDataCourses = await coursesService(dataService)

    const ArrayCoursesFilter = responseDataCourses.map(
      List => List.items.filter(
        item => item.id_teacher == id
      )
    )

    let coursesArray = ArrayCoursesFilter[0]
    setArrayCourses(coursesArray)

  }
  
  return (
    <>
      <Container>
        <div>
          {arrayItems.map(
            content =>
              <>
                <Row>
                  <Col>
                    <div className='wrapper'>
                      <tr>
                        <div>Instructor</div>
                        <div>{content.name}</div>
                        <div class="row">
                          <div class="col xs-12 col-md-6 col-lg-6">
                            <div>Total Estudiantes</div>
                            <div>{content.estudiantes}</div>
                          </div>
                          <div class="col xs-12 col-md-6 col-lg-6">
                            <div>Valoraciones</div>
                            <div>{content.valoraciones}</div>
                          </div>
                        </div>
                      </tr>
                      <tr>
                        <img id='teacher-detail-img' src={content.imagen} />
                      </tr>
                    </div>
                  </Col >
                </Row>
                <Row className='teacher-detail-nowrapper'>
                  <Col >
                    <div>Sobre mi</div>
                    <div>{content.resena}</div>
                  </Col>
                </Row>
                <Row className='teacher-detail-nowrapper'>
                  <Col>
                  <CoursesDetailMoreTeacherCoursesCard content={arrayCourses} />
                  </Col>
                </Row>
              </>
          )}
        </div>
      </Container>
    </>
  )
}
