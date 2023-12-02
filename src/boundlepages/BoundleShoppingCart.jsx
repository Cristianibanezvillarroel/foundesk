import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BoundleShoppingCartList } from '../boundlecomponents/boundleshoppingcart/BoundleShoppingCartList'
import { BoundleShoppingCartSummary } from '../boundlecomponents/boundleshoppingcart/BoundleShoppingCartSummary'

export const BoundleShoppingCart = () => {

  return (
    <>
    <Container>
        <Row>
        <Col md={6} className='mb-4'>
            <BoundleShoppingCartList />
        </Col>
        <Col md={6} className='mb-4'>
            <BoundleShoppingCartSummary />
        </Col>
        </Row>
    </Container>
    </>
  )
}
