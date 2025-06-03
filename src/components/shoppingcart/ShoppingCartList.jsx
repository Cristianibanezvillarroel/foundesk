import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../context/Shopping/ShoppingContext'
import { Button, ListGroup, Row, Toast } from 'react-bootstrap'
import TrashShoppingCartImg from '/public/trash.png'

export const ShoppingCartList = () => {
  const { shoppingCount, setShoppingCount, shoppingAmount, setShoppingAmount } = useContext(ShoppingContext)
  const [arrayStorage, setArrayStorage] = useState([])
  const options = {  maximumFractionDigits: 2   }  

  useEffect(() => {
    ShoppingListStart()
  }, [])


  const ShoppingListStart = async () => {
    let shoppingList = []
    const ShoppingListGet = await localStorage.getItem('shoppingList')
    console.log(ShoppingListGet)
    if (ShoppingListGet === null) {
      setShoppingCount(null)
    } else {
      shoppingList = JSON.parse(ShoppingListGet)
      let shoppingReduceMount = shoppingList.reduce((acumulador, item) => {
        return acumulador + item.price
      }, 0)
      let shoppingListSize = shoppingList.length
      setShoppingAmount(shoppingReduceMount)
      setShoppingCount(shoppingListSize)
      setArrayStorage(shoppingList)

    }
  }
  
  const deleteItem = async (idItem) => {

    const arrayWithoutIdItem = arrayStorage.filter(item => {
      return item.idItem !== idItem
    })

    await localStorage.setItem('shoppingList', JSON.stringify(arrayWithoutIdItem))
    ShoppingListStart()
  }
  return (
    <>
      <Row>
        <ListGroup as="ol" numbered>
          {arrayStorage.map((content, index) =>
            <ListGroup.Item as="li">
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <img id='boundle-shopping-img' src={content.imagen} className="rounded me-2" alt="" />
                      <strong className="me-auto">{content.author}</strong>
                      <small>{`CLP$${Intl.NumberFormat("en-US",options).format(content.price).replace(",", ".")}`}</small>
                    </Toast.Header>
                    <Toast.Body className='boundle-shoppingcart-list'>
                      <div>{content.title}</div>
                      <div><Button variant='light' onClick={() => { deleteItem(content.idItem) }}><img id='shopping-cart-remove-img' src={TrashShoppingCartImg} /></Button></div>
                      </Toast.Body>
                  </Toast>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Row>
    </>
  )
}
