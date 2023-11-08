import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const RationalAccordion = () => {
  return (
    <Accordion className='rational-left-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Cursos especializados de 30 min</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h7>Accede a cursos especializados en las distintas áreas de tu negocio con contenido dirigido y orientado a la accion.</h7><br />
          <h8 className='h8-accordion-heading'>Conoce mas</h8>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Riesgos de Base</h6>
        </Accordion.Header>
        <Accordion.Body>
         <h7>A través de nuestra plataforma podrás revisar en tiempo real los riesgos financieros asociados a tus obligaciones tributarias, laborales y administrativas.</h7><br />
         <h8 className='h8-accordion-heading'>Conoce mas</h8>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ KPI Claves</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h7>Podrás activar data que te permitirá revisar indicadores comerciales y contables para una comprensión global de tu crecimiento y liquidez.</h7><br />
          <h8 className='h8-accordion-heading'>Conoce mas</h8>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Carpeta Administrativa</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h7>La plataforma te permitirá compartir archivos específicos propios o de otros usuarios activos, con comentarios y vínculos.</h7><br />
          <h8 className='h8-accordion-heading'>Conoce mas</h8>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
