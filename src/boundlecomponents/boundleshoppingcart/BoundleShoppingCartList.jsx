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
      let i = 0
      let newArray = []
      shoppingList.forEach(item => {
        newArray[i] = item
        i++
      })
      let shoppingListSize = shoppingList.length
      setShoppingCount(shoppingListSize)
      setArrayStorage(newArray)

    }
  }
  console.log(arrayStorage)

  const deleteItem = async (index) => {
    let shoppingList = []
    /*const ShoppingListGet = await localStorage.getItem('shoppingList')
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
    })*/
    arrayStorage.splice(index, 1)
    arrayStorage.forEach((item, index) => {
      shoppingList.push(item)
    })

    await localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
    ShoppingListStart()
  }
  return (
    <>
      <Row>
        <ListGroup as="ol" numbered>
          {arrayStorage.map((content, index) =>
            <ListGroup.Item as="li">
              <div className='boundle-shoppingcart-list'>
                <div>
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <img id='boundle-shopping-img' src={content.imagen} className="rounded me-2" alt="" />
                      <strong className="me-auto">{content.author}</strong>
                      <small>{content.price}</small>
                    </Toast.Header>
                    <Toast.Body>{content.title}</Toast.Body>
                  </Toast>
                </div>
                <div>
                  <Button variant='light' onClick={() => { deleteItem({ index }) }}><img src={TrashShoppingCartImg} /></Button>
                </div>
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Row>
    </>
  )
}
