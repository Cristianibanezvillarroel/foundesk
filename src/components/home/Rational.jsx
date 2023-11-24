import React from 'react'
import { Button } from 'react-bootstrap'
import { RationalAccordion } from './RationalAccordion'
import { Link } from 'react-router-dom'

export const Rational = () => {
  return (
    <>
      <div id='rational-left' >
        <div id='rational-left-llamado'>
          <p>Impacta en tu performance durante todo el ciclo de vida de tu negocio.</p>
        </div>
        <div id='rational-left-bajada'>
          <p>Accede a cursos online exclusivamente diseñados para las necesidades de un emprendedor, y logra dominio de herramientas de control que aquí te proporcionamos para un mayor contro de tu negocio.</p>
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
