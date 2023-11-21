import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

export const TemplatesCarrusel = ({imagen, description, tipo, tittle}) => {

  return (
    <>
    <Container>
      <Row>
        <div className='col xs-6 col-md-6 d-flex flex-column justify-content-between'>
              <img className="d-block w-100" width="320px" id='templatescarrusel-img' src={imagen} />          
        </div>
        <div className='col xs-6 col-md-6' id='templatescarrusel-text' >
          <div style={{ fontSize: 'small' }}>
            <p>{description}</p>
          </div>
          <div style={{ fontWeight: 'bold' }}>{tipo}</div>
          <div style={{ fontSize: 'small' }}>{tittle}</div>
          <div>
            <Button className="btn btn-primary btn-sm mb-5" variant='primary'>Conoce mas aqui</Button>
          </div>
        </div>
      </Row>
      </Container>
    </>
  )
}