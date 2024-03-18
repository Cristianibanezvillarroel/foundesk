import React, { useEffect, useState } from 'react'
import { coursesService } from '../../services/courses';
import { customerTestimonialsService } from '../../services/customertestimonials';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsCircleFill } from "react-icons/bs";
import Calificacionesimg from '/public/calificaciones.png'
import { CoursesDetailTestimonialsCard } from './CoursesDetailTestimonialsCard';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { PopupTestimonials } from '../popups/PopupTestimonials';

export const CoursesDetailTestimonials = ({ content }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const tooglePopup = () => {
    setShowPopup(!showPopup)
    document.body.style.overflow = showPopup ? 'auto' : 'hidden'
  }

  console.log(content)
  let map = new Map()
  let calificacionArray = content.map(
    item =>
      map.set(0, item.calificacion).set(1, item.valoraciones).set(2, item._id)
  )
  let resultTestimonials = content.map(({ testimonials }) => testimonials)

  return (
    <Container>
      <Row>
        <Col>
          <div id='courses-detail-testimonials-row'><img id='courses-detail-testimonials-calificacion' src={Calificacionesimg} /> {map.get(0)} Valoracion del curso <BsCircleFill /> {map.get(1)} Valoraciones</div>
        </Col>
      </Row>
      <Row>
        {resultTestimonials.map(
          testimonialsArray => testimonialsArray.map(
            itemArray => itemArray.slice(-2).map(
              item =>
                <>
                  <Col md={6} className='mb-4'>
                    <CoursesDetailTestimonialsCard item={item} />
                  </Col>
                </>
            )
          )
        )}
      </Row>
      <Row>
        <div>
          <button onClick={tooglePopup}>Mas valoraciones</button>
          {showPopup && <PopupTestimonials onClose={tooglePopup} content={content} />}
        </div>
      </Row>
    </Container>
  )
}
