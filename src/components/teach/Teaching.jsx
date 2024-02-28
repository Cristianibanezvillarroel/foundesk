import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Teaching = () => {
  return (
    <>
      <div id='teach-left' >
        <div id='teach-left-llamado'>
          <h1>Enseña y crea valor hoy mismo.</h1>
        </div>
        <div id='teach-left-bajada'>
          <p>Libera tu potencial instructor y ayuda a quienes administran sus propias empresas.</p>
        </div>
        <div id='teach-left-button'>
          <Button as={Link} to='/diary' variant='primary'>Comienza hoy</Button>
        </div>
      </div>
    </>
  )
}