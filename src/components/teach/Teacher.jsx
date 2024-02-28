import React from 'react'
import { TeacherCarrusel } from './TeacherCarrusel'

export const Teacher = () => {
  return (
    <>
      <div>
        <div id='customer-llamado'>Conoce lo que dicen nuestros instructores</div>
        <div className='mx-auto'>
          <TeacherCarrusel />
        </div>
      </div>
    </>
  )
}