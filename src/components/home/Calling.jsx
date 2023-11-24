import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Calling = () => {
  return (
    <>
      <div id='call-left' >
        <div id='call-left-llamado'>
          <p>Escala tu potencial para un crecimiento sostenible</p>
        </div>
        <div id='call-left-bajada'>
          <p>Somos el software que integra cursos, dashboards de gestión y herramientas de controller para la pyme y el emprendedor todo en un mismo lugar, y eleva la productividad en la administracion de tu negocio.</p>
        </div>
        <div id='call-left-button'>
          <Button as={Link} to='/diary' variant='primary'>Solicita una demo</Button>
          <Button as={Link} to='/blog/1' variant='light'>foundesk en 1 minuto</Button>
        </div>
      </div>
    </>
  )
}
