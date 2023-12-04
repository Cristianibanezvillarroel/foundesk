import React from 'react'
import { Button, Container } from 'react-bootstrap'

export const BoundleShoppingCartSummary = () => {
  return (
    <>
      <Container className='shopping-cart-summary-box'>
        <h3>Resumen</h3>
        <hr />
        <p>1 Producto en el carro</p>
        <hr />
        <h4>
          <div>Total</div>
          <div>CLP12000</div>
        </h4>
        <h5>incluye 1200 de iva</h5>
      </Container>
      <div>he leido y aceptado los terminos y condiciones</div>
      <Button variant='primary'>PASAR POR LA CAJA</Button>
      <div>Volver a la tienda</div>
    </>

  )
}
