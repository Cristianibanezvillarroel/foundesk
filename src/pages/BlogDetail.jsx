import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export const BlogDetail = () => {

  const { id } = useParams()
  const [arrayItems, setArrayItems] = useState([])
  let itemsArray = []


  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 10);
  }, [])

  const getData = async () => {

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
  })

  console.log(ArrayItemsFilter)

  return (
    <>
      <Container>
        <div className='blog-detail-div'>
          {ArrayItemsFilter.map(
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
