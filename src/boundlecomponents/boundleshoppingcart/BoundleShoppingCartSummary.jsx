import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const BoundleShoppingCartSummary = () => {

  const navigate = useNavigate()

  const navigateCourses = () => {
      navigate('/boundlecourses')
  }

  return (
    <>
      <div className='shopping-cart-summary-box'>
        <h3>Resumen</h3>
        <hr />
        <p>1 Producto en el carro</p>
        <hr />
        <h4>
          <div>Total</div>
          <div>CLP12000</div>
        </h4>
        <h5>incluye 1200 de iva</h5>
      </div>
      <Button className='shopping-summary-button'>PAGAR</Button>
      <div onClick={navigateCourses} className='shopping-summary-backstore'>Volver a la tienda</div>
    </>

  )
}
