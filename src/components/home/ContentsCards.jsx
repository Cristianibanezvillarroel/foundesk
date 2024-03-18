import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blogDetailService } from '../../services/blogDetail';

export const ContentsCards = () => {

  const [dataBlogs, setDataBlogs] = useState([])

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

    const ListFiltrada = responseData.filter(List => {
      return List.message == 'Blog';
    })

    let arrayItems = []

    const ListFiltradaObject = ListFiltrada.forEach(function (item) {
      let itemsObject = item.items
      for (let i = 0; i < itemsObject.length; i++) {
        arrayItems.push(itemsObject[i])
      }
    })
    setDataBlogs(arrayItems)
  }


  const lastArrayItems = dataBlogs.slice(-3);

  const DESCRIPTION_CHAR_LIMIT_TITLE = 55
  const DESCRIPTION_CHAR_LIMIT_DESCRIPTION = 80

  return (
    <>
      <Row>
        {lastArrayItems.map(
          item =>
            <Col md={6} lg={4} className='mb-4'>
              <Card key={item.idItem}>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                  <Badge bg="secondary">{item.tipo}</Badge>
                  <Card.Title>{item.title.length > DESCRIPTION_CHAR_LIMIT_TITLE ? item.title.substring(0, DESCRIPTION_CHAR_LIMIT_TITLE) + '...' : item.title}</Card.Title>
                  <Card.Text>
                    {item.description.length > DESCRIPTION_CHAR_LIMIT_DESCRIPTION ? item.description.substring(0, DESCRIPTION_CHAR_LIMIT_DESCRIPTION) + '...' : item.description}
                  </Card.Text>
                  <Link to={`/blog/${item.idItem}`}>
                    <Button>Ver Contenido</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
        )}
      </Row>
    </>
  )
}
