import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Reproduccionesimg from '/public/reproducciones.png'
import Calificacionesimg from '/public/calificaciones.png'
import { Link } from 'react-router-dom';

export const CoursesCategoriesAccordion = ({ content }) => {

    let { quantity, categorie, review, description, imageicon, rating, students } = content
    const scoreCurses = []
    const ratingValue = typeof rating === 'object' && rating.$numberDecimal
        ? parseFloat(rating.$numberDecimal)
        : Number(rating);
    for (let i = 0; i < parseInt(ratingValue); i++) {
        scoreCurses.push(i)
    }

    return (
        <Accordion>

            <Accordion.Item eventKey="0">
                <Accordion.Header><img id='courses-categories-accordion-imagenicono' src={imageicon} />{categorie.categorie}</Accordion.Header>
                <Accordion.Body>
                    <div className='courses-categories-body'>
                        <div id='courses-categories-seccion'>
                            <div className='col-md-6 col xs-12'>
                                {scoreCurses.map(item =>
                                    <img id='courses-categories-calificaciones-img' src={Calificacionesimg} />
                                )}
                                <img id='courses-categories-reproducciones-img' src={Reproduccionesimg} />{students}
                            </div>
                            <div className='col-md-6 col xs-12'>
                                <h6 style={{ fontWeight: 'bold' }}>Cursos en categoria: {quantity}</h6>
                            </div>
                            <div className='col-md-6 col xs-12'>
                                <h7>Dirigido a: {review}</h7>
                            </div>
                            <div className='col-md-6 col xs-12'>
                                {description}
                            </div>
                            <div className='col-md-6 col xs-12'>
                                <Link to={`/courses/${categorie.categorie}`}>
                                    <Button variant='primary'>Ver los cursos</Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='col-md-6 col xs-12'>
                                <img id='courses-categories-accordion-imagenpublicidad' src={imageicon} />
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
