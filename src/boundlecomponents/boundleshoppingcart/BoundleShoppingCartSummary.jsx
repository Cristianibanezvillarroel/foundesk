import React, { useContext } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../context/ShoppingContext'

export const BoundleShoppingCartSummary = () => {
  const { shoppingCount, setShoppingCount, shoppingAmount, setShoppingAmount } = useContext(ShoppingContext)
  const navigate = useNavigate()
  const navigateCourses = () => {
    navigate('/boundlecourses')
  }

  return (
    <>
      <div className='shopping-cart-summary-box'>
        <h3>Resumen</h3>
        <hr />
        <div style={{textAlign: 'center'}}>
          <div id='shopping-cart-summary-box-count'>{shoppingCount} Productos </div>
          <div> &nbsp; en el carro</div>
        </div>
        <hr />
        <h4>
          <div>Total</div>
          <div>{shoppingAmount}</div>
        </h4>
        <h5>incluye 1200 de iva</h5>
      </div>
      <div className='shopping-cart-summary-bottom'>
        <Button variant='success'>PAGAR</Button>
      </div>
      <div className='shopping-cart-summary-bottom'>
        <Button variant='light' onClick={navigateCourses} className='shopping-summary-backstore'>Volver a la tienda</Button>
      </div>
    </>
  )
}
