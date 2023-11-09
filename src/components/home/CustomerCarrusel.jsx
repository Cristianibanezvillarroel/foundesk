import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CustomerCarruselImg } from './CustomerCarruselImg';

export const CustomerCarrusel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <CustomerCarruselImg />
        </Carousel.Item>
        <Carousel.Item>
          <CustomerCarruselImg />
        </Carousel.Item>
        <Carousel.Item>
          <CustomerCarruselImg />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
