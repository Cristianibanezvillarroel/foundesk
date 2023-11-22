import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Start = () => {
  return (
    <>
    <div id='start-llamado'>
      Logra optimizar la gestión de tu empresa con Foundesk
      </div>
    <Button as={Link} to='/diary' variant='primary'>Agenda una demo gratis</Button>  
    </>
  )
}
