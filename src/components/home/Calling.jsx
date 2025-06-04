import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Calling = () => {
  return (
    <>
      <div id='call-left' >
        <div id='call-left-llamado'>
          <h1>Cursos de administracion y marketing para tu emprendimiento.</h1>
        </div>
        <div id='call-left-bajada'>
          <p>Somos la plataforma de cursos online para tu emprendimiento, que ayuda a mejorar la productividad y el desempeño en tu administración y marketing.</p>
        </div>
        <div id='call-left-button'>
          <Button as={Link} to='/diary' variant='primary'>Solicita una demo</Button>
          <Button as={Link} to='/blog/1' variant='light'>foundesk en 1 minuto</Button>
        </div>
      </div>
    </>
  )
}
