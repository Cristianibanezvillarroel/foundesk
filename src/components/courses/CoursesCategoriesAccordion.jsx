import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Reproduccionesimg from '/public/reproducciones.png'
import Calificacionesimg from '/public/calificaciones.png'
import { Link } from 'react-router-dom';

export const CoursesCategoriesAccordion = ({ content }) => {
    
    let { cantidad, id_categoria, resena, description, imagenicono , imagenpublicidad, calificacion, reproducciones } = content
    const scoreCurses = []
    for (let i = 0; i < parseInt(calificacion); i++) {
            scoreCurses.push(i)
    }

    return (
        <Accordion>

            <Accordion.Item eventKey="0">
                <Accordion.Header><img id='courses-categories-accordion-imagenicono' src={imagenicono} />{categoria}</Accordion.Header>
                <Accordion.Body>
                    <div className='courses-categories-body'>
                        <div id='courses-categories-seccion'>
                            <div className='col-md-6 col xs-12'>
                                {scoreCurses.map(item => 
                                    <img id='courses-categories-calificaciones-img' src={Calificacionesimg} />
                                )}
                                    <img id='courses-categories-reproducciones-img' src={Reproduccionesimg}/>{reproducciones}
                            </div>
                            <div className='col-md-6 col xs-12'>
                                <h6 style={{fontWeight:'bold'}}>Cursos en categoria: {cantidad}</h6> 
                            </div>
                            <div className='col-md-6 col xs-12'>
                                <h7>Dirigido a: {resena}</h7>
                            </div>
                            <div className='col-md-6 col xs-12'>
                                {description}
                            </div>
                            <div className='col-md-6 col xs-12'>
                                <Link to={`/courses/${id_categoria.categoria}`}>
                                <Button variant='primary'>Ver los cursos</Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='col-md-6 col xs-12'>
                            <img id='courses-categories-accordion-imagenpublicidad' src={imagenpublicidad} />
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
