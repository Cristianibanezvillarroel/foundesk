import React, { useContext } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../context/ShoppingContext'
import { NumericFormat } from 'react-number-format'

export const BoundleShoppingCartSummary = () => {
  const { shoppingCount, setShoppingCount, shoppingAmount, setShoppingAmount } = useContext(ShoppingContext)
  const shoppingIva = (shoppingAmount - shoppingAmount / 1.19)
  const navigate = useNavigate()
  const navigateCourses = () => {
    navigate('/boundlecourses')
  }

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
          <div>Total </div>
          <div>CLP$<NumericFormat value={shoppingAmount} thousandSeparator="." decimalSeparator="," /><NumericFormat value={shoppingAmount} thousandSeparator="." decimalSeparator="," /></div>
        </h4>
        <div id='shopping-cart-summary-iva'>
          <h6>incluye&nbsp;</h6>
          <NumericFormat value={shoppingIva} thousandSeparator="." decimalSeparator="," decimalScale={0} />
          <h6>&nbsp;de iva</h6>
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
