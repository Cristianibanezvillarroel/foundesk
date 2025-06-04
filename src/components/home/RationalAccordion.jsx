import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const RationalAccordion = () => {
  return (
    <Accordion className='rational-left-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Videos online en cápsulas de 10 a 15 minutos.</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Podrás aprender de las distintas áreas de administración y marketing que tiene todo emprendimiento con contenido dirigido y orientado a la accion.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/courses'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Tutoriales web y descargables en PDF para que puedas disponer de todo el contenido y mejorar tu aprendizaje.</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Además de los contenidos que podrás revisar en los videos explicativos, tendrás información adicional y complementaria en los tutoriales y descargables en PDF.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/teach/'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Sección de Preguntas Frecuentes en todas las áreas de cada curso.</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Hemos seleccionado un set exhaustivo de preguntas frecuentes para cada curso con objeto de poder ayudarte de manera precisa en aquellas situaciones cotidianas en la administración y marketing de tu emprendimiento.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/train/'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
