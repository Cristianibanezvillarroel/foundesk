import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const RationalAccordion = () => {
  return (
    <Accordion className='rational-left-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Cursos online para Aprender con Foundesk.</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Accede a cursos online en las distintas áreas del negocio con contenido dirigido y orientado a la accion.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/courses'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Plataforma para Enseñar en Foundesk.</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>Si eres coach o experto en algun área de negocio y te interesa compartir tus conocimientos, ofrece tus cursos con nosotros creando tu cuenta con un completo set de herramientas y cursos que facilitarán tu proceso.</h6><br />
          <h6 className='h8-accordion-heading'>
            <a href='/foundesk/#/teach/'>
              Conoce mas
            </a>
          </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h6 className='h6-accordion-heading'>+ Links para Capacitar con Foundesk.</h6>
        </Accordion.Header>
        <Accordion.Body>
          <h6>A través de nuestra plataforma podrás subir tus videos de capacitación, contenidos y documentos en PDF que facilitarán el proceso de aprendizaje enviando solo un link de acceso a tus destinatarios.</h6><br />
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
