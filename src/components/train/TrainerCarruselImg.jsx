import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

export const TrainerCarruselImg = ({imagen, description, author, job}) => {

  return (
    <>
    <Container>
      <Row>
        <div className='col xs-6 col-md-6 d-flex flex-column justify-content-between'>
              <img className="d-block w-100" id='customercarrusel-img' src={imagen} />          
        </div>
        <div className='col xs-6 col-md-6 d-flex flex-column align-text-center' >
          <div style={{ fontSize: 'small' }}>
            <p>{description}</p>
          </div>
          <div style={{ fontWeight: 'bold' }}>{author}</div>
          <div style={{ fontSize: 'small' }}>{job}</div>
          <div>
            <Button className="customer-carrusel-button" variant='primary'>Conoce mas aqui</Button>
          </div>
        </div>
      </Row>
      </Container>
    </>
  )
}