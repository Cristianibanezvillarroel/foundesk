import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export const DashboardsMenu = () => {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
      };
  return (
    <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
      General
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Riesgos
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>
      Comercial
    </ListGroup.Item>
    <ListGroup.Item action href="#link3">
      Financieros
    </ListGroup.Item>
  </ListGroup>
  )
}
