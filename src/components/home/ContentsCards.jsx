import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { ListContentsCards } from '../ContentsCardsList'
import { Col, Row } from 'react-bootstrap';

export const ContentsCards = () => {
  const ListFiltrada = ListContentsCards.filter(List => {
    return List.categoria == 1;
  })
  return (
    <>
      <Row>
        {ListFiltrada.map(content => content.items.map(
          item =>
            <Col md={6} lg={4} className='mb-4'>
              <Card>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                  <Badge bg="secondary">{item.tipo}</Badge>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))}
      </Row>
    </>
  )
}
