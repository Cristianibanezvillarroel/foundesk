import React, { useEffect, useState } from 'react'
import { coursesService } from '../../services/courses';
import { customerTestimonialsService } from '../../services/customertestimonials';
import { Col, Container, Row } from 'react-bootstrap';
import { BsCircleFill } from "react-icons/bs";
import Calificacionesimg from '/public/calificaciones.png'
import { CoursesDetailTestimonialsCard } from './CoursesDetailTestimonialsCard';

export const CoursesDetailTestimonials = ({ content }) => {

  const [arrayItems, setArrayItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV2()
    }, 10);
  }, [])

  const getDataV2 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseDataCustomerTestimonials = await customerTestimonialsService(dataService)

    const ArrayTestimonialsFilter = responseDataCustomerTestimonials.map(
      List => List.items.filter(
        item => item.id_courses == content._id
      )
    )
    setArrayItems(ArrayTestimonialsFilter[0])

  }

  return (
    <Container>
      <Row>
        <Col>
          <div id='courses-detail-testimonials-row'><img id='courses-detail-testimonials-calificacion' src={Calificacionesimg} /> {content.calificacion} Valoracion del curso <BsCircleFill /> {content.valoraciones} Valoraciones</div>
        </Col>
      </Row>
      <Row>
        {arrayItems.map(
          item =>

            <Col md={6} className='mb-4'>
              <CoursesDetailTestimonialsCard item={item} />
            </Col>

        )}
      </Row>
    </Container>

  )
}
