import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../context/Shopping/ShoppingContext'
import { mercadoPagoService } from '../../services/mercadopago'
import UserContext from '../../context/User/UserContext'

export const ShoppingCartSummary = () => {
  const { shoppingCount, setShoppingCount, shoppingAmount, setShoppingAmount } = useContext(ShoppingContext)
  const ctx = useContext(UserContext)
  const navigate = useNavigate()
  const navigateCourses = () => {
    navigate('/courses')
  }
  const shoppingIva = (shoppingAmount - shoppingAmount / 1.19)
  const PublicKey = "TEST-7ccc572b-aa1e-460a-822d-5458de07031a"
  const { name, email } = ctx.user
  const [showButton, setShowButton] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const closeButton = () => {
    setShowButton(false)
  }

  const getCheckout = async () => {
    setIsLoading(true);

    if (name) {

      const id = await getPreferenceCheckoutMP()

      preaddCheckout(id)
      setIsLoading(false)
    }
  }

  const getPreferenceCheckoutMP = async () => {

    const dataService = {
      method: 'POST',
      body: JSON.stringify({
        items: [
          {
            title: "Cursos en Foundesk",
            quantity: 1,
            currency_id: "CLP",
            unit_price: shoppingAmount
          }
        ],
        payer: {
          name: name,
          email: email
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }

    const responseData = await mercadoPagoService(dataService)
    return responseData.checkoutId

  }

  const preaddCheckout = (id) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.addEventListener('load', () => { addCheckout(id) });
    return document.body.appendChild(script);
  }


  const addCheckout = (id) => {
    const mp = new window.MercadoPago(PublicKey, {
      locale: "es-CL"
    })

    mp.checkout({
      preference: {
        id: id,
      },
      render: {
        container: `#payment-form`,
        label: "Pagar"
      }
    })

  }


  const options = { maximumFractionDigits: 0 }
  const amountNumber = Intl.NumberFormat("en-US", options).format(shoppingAmount);
  const amountNumberFormmated = amountNumber.replace(",", ".")

  const ivaNumber = Intl.NumberFormat("en-US", options).format(shoppingIva);
  const ivaNumberFormmated = ivaNumber.replace(",", ".")

  return (
    <>
      <div className='shopping-cart-summary-box'>
        <h3>Resumen</h3>
        <hr />
        <h5>
          <div id='shopping-cart-summary-box-count-blue'>{shoppingCount} {shoppingCount > 1 ? 'Productos' : 'Producto'}</div>
          <div id='shopping-cart-summary-box-count-nonblue'>&nbsp; en el carro</div>
        </h5>
        <hr />
        <h4>
          <div>Total</div>
          <div>{`CLP$${amountNumberFormmated}`}</div>
        </h4>
        <h6>{`(incluye $${ivaNumberFormmated} de IVA)`}</h6>
      </div>
      <div className='shopping-cart-summary-bottom'>
        <div>
          {isLoading && <Spinner animation="border" />}
          {showButton && <Button onClick={() => { getCheckout(), closeButton() }} style={{ textAlign: 'center' }} classNameName="mt-10" id="payment-form" disabled={isLoading}>Confirmar</Button>}
        </div>
        <div style={{ textAlign: 'center' }} classNameName="mt-10" id="payment-form"></div>
      </div>
      <div className='shopping-cart-summary-bottom'>
        <Button variant='light' onClick={navigateCourses} className='shopping-summary-backstore'>Volver a la tienda</Button>
      </div>
    </>
  )
}
