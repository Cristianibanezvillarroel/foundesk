import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'
import { ListGroup, Row, Toast } from 'react-bootstrap'

export const BoundleShoppingCartList = () => {
  const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
  const [arrayStorage, setArrayStorage] = useState([])

  useEffect(() => {
    ShoppingListStart()
  }, [])


  const ShoppingListStart = async () => {
    let shoppingList = []
    const ShoppingListGet = await localStorage.getItem('shoppingList')
    console.log(ShoppingListGet)
    if (ShoppingListGet === null) {
      console.log('storage vacio')
      setShoppingCount(null)
    } else {
      console.log('storage con registros')
      shoppingList = JSON.parse(ShoppingListGet)
      let shoppingListSize = shoppingList.length
      setShoppingCount(shoppingListSize)
      setArrayStorage(shoppingList)

    }
  }
  return (
    <>
      <Row>
        {arrayStorage.map(content =>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">
              <Toast>
                <Toast.Header>
                  <img src={content.imagen} className="rounded me-2" alt="" />
                  <strong className="me-auto">{content.author}</strong>
                  <small>{content.price}</small>
                </Toast.Header>
                <Toast.Body>{content.title}</Toast.Body>
              </Toast>
            </ListGroup.Item>
          </ListGroup>
        )}
      </Row>
    </>
  )
}
