import React, { useEffect, useRef, useState } from 'react'
import { CloseButton, Col, Container } from 'react-bootstrap'
import { CoursesDetailTestimonialsCard } from '../coursesdetail/CoursesDetailTestimonialsCard'


export const PopupTestimonials = ({ onClose, content }) => {

    console.log(content)
    let resultTestimonials = content.map(({ testimonials }) => testimonials)

    let map = new Map()
    let calificacionArray = content.map(
        item => map.set(0, item.calificacion).set(1, item.valoraciones)
    )

    const executeScroll = () => {
        window.scrollTo({ top: 500, behavior: "smooth" })
    }

    const InnerComponent = () => {
        return (
            <Container>
                <div style={{ height: '100%', width: '100%', overflow: 'auto' }} className="popup-testimonials-background">
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

    const innerContainerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (innerContainerRef.current) {
                innerContainerRef.current.style.transform = `translateY(${scrollTop}px)`
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div>
                <InnerComponent ref={innerContainerRef} />
            </div>
        </>
    )
}
