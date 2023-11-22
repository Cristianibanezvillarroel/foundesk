import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const RationalAccordion = () => {
  return (
    <Accordion className='rational-left-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Cursos online de 30 min</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Accede a cursos online en las distintas áreas de tu negocio con contenido dirigido y orientado a la accion.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/courses'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Control Riesgos</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>A través de nuestra plataforma podrás revisar en tiempo real los riesgos financieros asociados a tus obligaciones tributarias, laborales, comerciales y financieras.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/dashboards/risk'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ KPI Claves</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Podrás activar data que te permitirá revisar indicadores comerciales y contables para una comprensión global de tu crecimiento y liquidez.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/dashboards/kpi'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Templates Administrativos</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>La plataforma te permitirá descargar y conocer plantillas con comentarios y vínculos.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/templates'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
