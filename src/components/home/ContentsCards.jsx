import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { ListContentsCards } from '../ContentsCardsList'

export const ContentsCards = () => {
  const ListFiltrada = ListContentsCards.filter(List => {
    return List.categoria == 1;
  })
  return (
    <>
      <div className='row g-3'>
        {ListFiltrada.map(content => content.items.map(
          item =>
            <div className='col xs-12 col-md-6 col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                  <Badge bg="secondary">{item.tipo}</Badge>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        ))}
      </div>
    </>
  )
}
