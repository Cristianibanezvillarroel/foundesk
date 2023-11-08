import React from 'react'
import { Button } from 'react-bootstrap'
import { RationalAccordion } from './RationalAccordion'

export const Rational = () => {
  return (
    <>
      <div id='rational-left' >
        <div id='rational-left-llamado'>
          <p>Impacta en tu performance durante todo tu ciclo de vida como emprendedor.</p>
        </div>
        <div id='rational-left-bajada'>
          <p>Accede a conocimiento especializado con cursos exclusivamente diseñados para las necesidades de un emprendedor, y logra dominio de herramientas de control que aquí te proporcionamos para una mejor administración.</p>
        </div>
        <div>
          <RationalAccordion />
        </div>
        <div id='rational-left-button'>
          <Button variant='primary'>Gana control hoy</Button>
        </div>
      </div>
    </>
  )
}
