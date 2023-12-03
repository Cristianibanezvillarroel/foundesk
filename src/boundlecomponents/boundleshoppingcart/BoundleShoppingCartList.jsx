import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

export const BoundleShoppingCartList = () => {
  const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
  const [ arrayStorage, setArrayStorage ] = useState()

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
      console.log(typeof shoppingList)
    }
  }
  return (
    <div>hola</div>
  )
}
