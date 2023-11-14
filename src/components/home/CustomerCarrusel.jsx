import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CustomerCarruselImg } from './CustomerCarruselImg';
import { ListContentsCarrusel } from '../ListContentsCarrusel';

export const CustomerCarrusel = () => {

  const ListFiltrada = ListContentsCarrusel.filter(List => {
    return List.categoria == 1;
  })


  return (
    <>
      <Carousel>
        {ListFiltrada.map(content => content.items.map(
          item =>
            
            <Carousel.Item>
              <CustomerCarruselImg imagen={item.imagen} description={item.descripcion} author={item.autor} job={item.cargo}/>
            </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
