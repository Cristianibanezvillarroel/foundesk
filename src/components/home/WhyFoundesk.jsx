import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const WhyFoundesk = () => {
  return (
    <>
      <div id='whyfoundesk-line1'>¿POR QUÉ FOUNDESK?</div>
      <div id='whyfoundesk-line2'>Con Foundesk, tu equipo y tu empresa crecen juntos</div>
      <div id='whyfoundesk-line3'>Logra equipos comprometidos, eficientes y potencia las habilidades del futuro, obteniendo grandes resultados</div>
      <div className='row'>
        <div className='col xs-12 col-md-6 col-lg-4'>
          <div className='whyfoundesk-data'>
            <h1>94%</h1>
            <h5>Se quedaría en una empresa si esta invirtiera en su desarrollo</h5>
          </div>
        </div>
        <div className='col xs-12 col-md-6 col-lg-4'>
          <div className='whyfoundesk-data'>
            <h1>83%</h1>
            <h5>De los líderes considera que la ética y el cumplimiento son prioridad</h5>
          </div>
        </div>
        <div className='col xs-12 col-md-6 col-lg-4'>
          <div className='whyfoundesk-data'>
            <h1>58%</h1>
            <h5>De las empresas han invertido en mejorar la experiencia de sus empleados</h5>
          </div>
        </div>
        <div className='col xs-12 col-md-6 col-lg-4'>
          <div className='whyfoundesk-data'>
            <h1>83%</h1>
            <h5>De las personas ejecuta sus tareas en menos tiempo</h5>
          </div>
        </div>
        <div className='col xs-12 col-md-6 col-lg-4'>
          <div className='whyfoundesk-data'>
            <h1>98%</h1>
            <h5>Aplica lo aprendido en su día laboral</h5>
          </div>
        </div>
        <div className='col xs-12 col-md-6 col-lg-4'>
          <div className='whyfoundesk-data'>
            <h1>92%</h1>
            <h5>Se sienten más satisfechos con su empresa</h5>
          </div>
        </div>
      </div>
      <div id='whyfoundesk-button'>
        <Button as={Link} to='/diary' variant='light'>Agenda una demo</Button>{''}
      </div>
    </>
  )
}
