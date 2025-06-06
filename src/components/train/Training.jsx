import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Training = () => {
  return (
    <>
      <div id='teach-left' >
        <div id='train-left-llamado'>
          <h1>Aprende e incorpora a tus colaboradores para una mayor productividad.</h1>
        </div>
        <div id='train-left-bajada'>
          <p>Utilizando herramientas y estructuras predeterminadas para una aprendizaje fluido y probado.</p>
        </div>
        <div id='teach-left-button'>
          <Button as={Link} to='/diary' variant='primary'>Comienza hoy</Button>
        </div>
      </div>
    </>
  )
}