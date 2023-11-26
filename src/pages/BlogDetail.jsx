import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export const BlogDetail = () => {

  const { id } = useParams()
  const [arrayItems, setArrayItems] = useState([])
  let itemsArray = []


  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const getDataV1 = async () => {

    const url = 'https://api-foundesk.onrender.com/v1/blog';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json()

    const ArrayItemsFilter = responseData.map(
      List => List.items.filter(
        item => item.idItem == id
      )
    )
    setArrayItems(ArrayItemsFilter)
  }

  /*const getData = async () => {
  
    const url = 'https://api-foundesk.onrender.com/db/blogs';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    })
    const responseData = await response.json()
    const ListFiltrada = responseData.filter(List => {
      return List.id >= 0
    })
  
    const ListFiltradaObject = ListFiltrada.forEach(function (item) {
      let itemsObject = item.items
      for (let i = 0; i < itemsObject.length; i++) {
        
        itemsArray.push(itemsObject[i])
      }
      
    })
    setArrayItems(itemsArray)
  }
  
  
  console.log(arrayItems)
  const ArrayItemsFilter = arrayItems.filter(List => {
    return List.idItem == id
  })*/

  console.log(arrayItems)

  return (
    <>
      <Container>
        <div className='blog-detail-div'>
          {arrayItems.map(
            content =>
              <>
                <div>
                  <img id='blog-detail-img' src={content.imagen} />
                </div>
                <div>
                  <h3>{content.title}</h3>
                </div>
                <div>
                  <h5>{content.description}</h5>
                </div>
              </>
          )}
        </div>
      </Container>
    </>
  )
}
