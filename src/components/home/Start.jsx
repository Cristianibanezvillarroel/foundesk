import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <>
    <div id='start-llamado'>
      Comienza hoy a escalar tu productividad y habilidades con Foundesk
      </div>
    <Button as={Link} to='/diary' variant='primary'>Agenda una demo gratis</Button>  
    </>
  )
}
