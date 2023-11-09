import React from 'react'
import { CustomerCarrusel } from './CustomerCarrusel'

export const Customer = () => {
  return (
    <>
      <div>
        <div id='customer-llamado'>Conoce lo que dicen nuestros clientes</div>
        <div className='mx-auto'>
          <CustomerCarrusel />
        </div>
      </div>
    </>
  )
}
