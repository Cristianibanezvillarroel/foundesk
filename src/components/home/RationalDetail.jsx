import React from 'react'
import { Button } from 'react-bootstrap'
import { RationalDetailImg } from './RationalDetailImg'
import { RationalDetailContent } from './RationalDetailContent'

export const RationalDetail = () => {
  return (
    <>
      <div id='rationaldetail-up-llamado'>
        <p>La plataforma que te permitirá desarrollar tus capacidades en un solo lugar.</p>
      </div>
      <div id='rationaldetail-bajada'>
        <p>Con Foundesk, eleva tu potencial al siguiente nivel de una forma fácil y sencilla.</p>
      </div>
      <div id='rationaldetail-button'>
        <Button variant='primary'>Cursos</Button>{''}
        <Button variant='light'>Dashboard</Button>{''}
        <Button variant='light'>Archivos</Button>{''}
        </div>
      <div id='rationaldetail-content'>
        <RationalDetailImg />
        <RationalDetailContent />
        </div>
    </>
  )
}
