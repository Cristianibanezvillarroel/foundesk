import React from 'react'
import { Button } from 'react-bootstrap'

export const BoundleShoppingCartSummary = () => {
  return (
    <>
    <div>Resumen</div>
    <div>1 Producto en el carro</div>
    <div>
      <div>Total</div>
      <div>CLP12000</div>
    </div>
    <div>incluye 1200 de iva</div>
    <div>he leido y aceptado los terminos y condiciones</div>
    <Button variant='primary'>PASAR POR LA CAJA</Button>
    <div>Volver a la tienda</div>
    </>
    
  )
}
