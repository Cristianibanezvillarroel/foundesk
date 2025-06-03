import React from 'react'
import { CloseButton, Col, Container } from 'react-bootstrap'
import { CoursesDetailTestimonialsCard } from '../coursesdetail/CoursesDetailTestimonialsCard'


export const PopupTestimonials = ({ onClose, content }) => {

    let resultTestimonials = content.map(({ testimonials }) => testimonials)

    let map = new Map()
    let calificacionArray = content.map(
        item => map.set(0, item.calificacion).set(1, item.valoraciones)
    )

    return (
        <Container>
            <div className="popup-testimonials-background">
                <div className="popup-testimonials">
                    <div className='popup-testimonials-header'>
                        <h2>la jose * {map.get(0)} Valoracion * {map.get(1)} Valoraciones</h2>
                        <CloseButton onClick={onClose}></CloseButton>
                    </div>
                    <div>
                        <div>
                            seccion subtotals
                        </div>
                        <div className='popup-testimonials-content'>
                            {resultTestimonials.map(
                                testimonialsArray => testimonialsArray.map(
                                    itemArray => itemArray.map(
                                        item =>
                                            <>
                                                <Col>
                                                    <CoursesDetailTestimonialsCard item={item} />
                                                </Col>
                                            </>
                                    )
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
