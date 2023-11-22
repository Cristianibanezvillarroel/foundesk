import React from 'react'
import { useParams } from 'react-router-dom'
import { ListContentsCards } from '../components/ListContentsCards.js'
import { Container } from 'react-bootstrap'

export const BlogDetail = () => {

  const { id } = useParams()

  let arrayItems = []

  const ListFiltrada = ListContentsCards.filter(List => {
    return List.id >= 0
  })

  const ListFiltradaObject = ListFiltrada.forEach(function (item) {
    let itemsArray = item.items
    for (let i = 0; i < itemsArray.length; i++) {
      arrayItems.push(itemsArray[i])
    }
  })

  console.log(arrayItems)
  const ArrayItemsFilter = arrayItems.filter(List => {
    return List.idItem == id
  })

  console.log(ArrayItemsFilter)

  /*let itera1 = Object.entries(ListContentsCards)
      .forEach(([key, value]) => {
          
          let itera2 = Object.entries(value)
              .forEach(([key2, value2]) => {
                  
                  let items = value2.items

                      let itera3 = Object.entries(items)
                          .forEach(([key3, value3]) => {
                              
                              arrayItems.push(value3)
                              
                          })                   

              })
              console.log('este es el arreglo de items')
              console.log(arrayItems)
  });

  const arrayItemsFilter = arrayItems.filter(List => {
    return List.idItem == id
  })*/

  return (
    <>
      <Container>
        <div className='blog-detail-div'>
          {ArrayItemsFilter.map(
            content => 
              <>
              <div>
                <img id='blog-detail-img' src={content.imagen}/>
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
