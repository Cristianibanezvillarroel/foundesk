import React, { useContext } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../context/ShoppingContext'

export const BoundleShoppingCartSummary = () => {
  const { shoppingCount, setShoppingCount, shoppingAmount, setShoppingAmount } = useContext(ShoppingContext)
  const shoppingIva = (shoppingAmount - shoppingAmount / 1.19)
  const navigate = useNavigate()
  const navigateCourses = () => {
    navigate('/boundlecourses')
  }
  const options = {  maximumFractionDigits: 0   }   
  const amountNumber = Intl.NumberFormat("en-US",options).format(shoppingAmount);
  const amountNumberFormmated = amountNumber.replace(".", ",")

  const ivaNumber = Intl.NumberFormat("en-US",options).format(shoppingIva);
  const ivaNumberFormmated = ivaNumber.replace(".", ",")

  return (
    <>
      <div className='shopping-cart-summary-box'>
        <h3>Resumen</h3>
        <hr />
        <div style={{ textAlign: 'center' }}>
          <div id='shopping-cart-summary-box-count'>{shoppingCount} Productos</div>
          <div style={{ textAlign: 'center' }}>&nbsp; en el carro</div>
        </div>
        <hr />
        <h4>
          <div>Total</div>
          <div>{`CLP$${amountNumberFormmated}`}</div>
        </h4>
        <div >
          <h6 id='shopping-cart-summary-iva'>{`incluye $${ivaNumberFormmated} de IVA`}</h6>
        </div>
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
