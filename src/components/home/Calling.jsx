import React from 'react'
import { Button } from 'react-bootstrap'

export const Calling = () => {
  return (
    <>
      <div id='call-left' >
        <div id='call-left-llamado'>
          <p>Escala tus capacidades para el crecimiento de tu negocio</p>
        </div>
        <div id='call-left-bajada'>
          <p>Somos el software que integra cursos, herramientas y partners para el emprendedor todo en un mismo lugar, y eleva la productividad en la administracion de tu negocio.</p>
        </div>
        <div id='call-left-button'>
          <Button variant='primary'>Solicita una demo</Button>
          <Button variant='light'>foundesk en 1 minuto</Button>
        </div>
      </div>
    </>
  )
}
