import React from 'react'
import { Button } from 'react-bootstrap'
import { RationalAccordion } from './RationalAccordion'
import { Link } from 'react-router-dom'

export const Rational = () => {
  return (
    <>
      <div id='rational-left' >
        <div id='rational-left-llamado'>
          <p>Impacta en tu performance y aprende hoy.</p>
        </div>
        <div id='rational-left-bajada'>
          <p>Accede a cursos online exclusivamente diseñados para tus necesidades laborales, y logra dominio de nuevas habilidades que aquí te proporcionamos para una mayor productividad.</p>
        </div>
        <div>
          <RationalAccordion />
        </div>
        <div id='rational-left-button'>
          <Button as={Link} to='/diary' variant='primary'>Comienza hoy</Button>
        </div>
      </div>
    </>
  )
}
