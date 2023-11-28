import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CustomerCarruselImg } from './CustomerCarruselImg';
import { customerTestimonialsService } from '../../services/customertestimonials';

export const CustomerCarrusel = () => {

  const [dataCustomerCarrusel, setDataCustomerCarrusel] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const getDataV1 = async () => {

    const url = 'https://api-foundesk.onrender.com/v1/customertestimonials';
    
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    
    const responseData = await customerTestimonialsService(data)
    
    /*const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json()*/

    const ListFiltrada = responseData.filter(List => {
      return List.message == 'CustomerTestimonials';
    })
    setDataCustomerCarrusel(ListFiltrada)
  }

  /*const getData = async () => {

    const url = 'https://api-foundesk.onrender.com/db/customertestimonials';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const responseData = await response.json()
    const ListFiltrada = responseData.filter(List => {
      return List.categoria == 1;
    })
    setDataCustomerCarrusel(ListFiltrada)
  }*/

  return (
    <>
      <Carousel>
        {dataCustomerCarrusel.map(content => content.items.map(
          item =>

            <Carousel.Item>
              <CustomerCarruselImg imagen={item.imagen} description={item.descripcion} author={item.autor} job={item.cargo} />
            </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
