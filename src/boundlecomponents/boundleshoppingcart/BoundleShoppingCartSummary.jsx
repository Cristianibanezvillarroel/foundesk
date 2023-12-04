import React, { useContext } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../context/ShoppingContext'

export const BoundleShoppingCartSummary = () => {
  const { shoppingCount, setshoppingCount } = useContext(ShoppingContext)
  const navigate = useNavigate()
  const navigateCourses = () => {
    navigate('/boundlecourses')
  }

  return (
    <>
      <div className='shopping-cart-summary-box'>
        <h3>Resumen</h3>
        <hr />
        <div>
          <p>{shoppingCount} Productos </p>
          <div>en el carro</div>
        </div>
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
