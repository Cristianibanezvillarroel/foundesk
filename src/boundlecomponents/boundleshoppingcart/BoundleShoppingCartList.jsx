import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'
import { Button, ListGroup, Row, Toast } from 'react-bootstrap'
import TrashShoppingCartImg from '/public/trash.png'

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
      const shoppingReduceMount = shoppingList.reduce((acumulador, item) => {
        return acumulador + item.price
      })
      console.log(shoppingReduceMount)
      let shoppingListSize = shoppingList.length
      setShoppingCount(shoppingListSize)
      setArrayStorage(shoppingList)

    }
  }
  console.log(arrayStorage)

  const deleteItem = async (idItem) => {
    /*let shoppingList = []
    const ShoppingListGet = await localStorage.getItem('shoppingList')
    if (ShoppingListGet === null) {
      shoppingList = [];
    } else {
      shoppingList = JSON.parse(ShoppingListGet);
    }
    let i = 0
    let newArray = []
    shoppingList.forEach(item => {
      newArray[i] = item
      i++
    })
    arrayStorage.splice(index, 1)
    arrayStorage.forEach((item, index) => {
      shoppingList.push(item)
    })*/

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
                      <small>{content.price}</small>
                    </Toast.Header>
                    <Toast.Body className='boundle-shoppingcart-list'>
                      <div>{content.title}</div>
                      <div><Button variant='light' onClick={() => { deleteItem(content.idItem) }}><img id='' src={TrashShoppingCartImg} /></Button></div>
                      </Toast.Body>
                  </Toast>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Row>
    </>
  )
}
