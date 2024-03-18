import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { blogDetailService } from '../services/blogDetail'

export const BlogDetail = () => {

  const { id } = useParams()
  const [arrayItems, setArrayItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const getDataV1 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await blogDetailService(dataService)

    const ArrayItemsFilter = responseData.map(
      List => List.items.filter(
        item => item.idItem == id
      )
    )

    let itemsArray = ArrayItemsFilter[0]
    setArrayItems(itemsArray)
  }

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
