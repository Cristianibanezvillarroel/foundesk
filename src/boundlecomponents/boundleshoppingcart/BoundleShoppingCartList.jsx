import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'
import { Row } from 'react-bootstrap'

export const BoundleShoppingCartList = () => {
  const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
  const [ arrayStorage, setArrayStorage ] = useState([])

  useEffect(() => {
    ShoppingListStart()
  }, [])

  let shoppingList = []
  const ShoppingListStart = async () => {
    
    const ShoppingListGet = await localStorage.getItem('shoppingList')
    console.log(ShoppingListGet)
    if (ShoppingListGet === null) {
      console.log('storage vacio')
      setShoppingCount(null)
    } else {
      console.log('storage con registros')
      shoppingList.push(JSON.parse(ShoppingListGet)) 
      let shoppingListSize = shoppingList.length
      setShoppingCount(shoppingListSize)
      setArrayStorage(shoppingList)
      console.log(shoppingListSize)
      console.log(typeof shoppingList)
    }
  }
  return (
    <>
    <Row>
      {shoppingList.map(content => 
        <div>{content.title}</div>)}  
    </Row>
    </>    
  )
}
