import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coursesService } from '../services/courses'
import { customerTestimonialsService } from '../services/customertestimonials'
import { Col, Container, Row } from 'react-bootstrap'

export const Testimonials = () => {

  const { id } = useParams()
  const [calificacion, setCalificacion] = useState()
  const [valoracion, setValoracion] = useState()
  

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
    const responseData = await coursesService(dataService)
    const responseDataCustomerTestimonials = await customerTestimonialsService(dataService)

    const ArrayCoursesFilter = responseData.map(
      List => List.items.filter(
        item => item._id == id
      )
    )

    let dataTestimonials = responseDataCustomerTestimonials.map(
      List => List.items.filter(
        item => item.id_courses == id
      )
    )

    let courseArray = ArrayCoursesFilter[0]

    let map = new Map()
    let calificacionArray = courseArray.map(
      item => map.set(0, item.calificacion).set(1, item.valoraciones)
    )
    
    setCalificacion(map.get(0))
    setValoracion(map.get(1))

  }
  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div style={{color: 'black'}}> {calificacion} Valoracion del curso * {valoracion} Valoraciones </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Testimonials</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
