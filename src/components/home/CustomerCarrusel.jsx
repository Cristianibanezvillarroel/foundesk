import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CustomerCarruselImg } from './CustomerCarruselImg';
import { ListContentsCustumerTestimonials } from '../ListContentsCustomerTestimonials';

export const CustomerCarrusel = () => {

  const [dataCustomerCarrusel, setDataCustomerCarrusel] = useState([])

  useEffect(() => {
    setTimeout(() => {
        getData()
    }, 10);
}, [])

const getData = async () => {

    const url = 'https://api-foundesk.onrender.com/db/customertestimonials';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    })
    const responseData = await response.json()
    const ListFiltrada = responseData.filter(List => {
      return List.categoria == 1;
    })
    setDataCustomerCarrusel(ListFiltrada)
}

  return (
    <>
      <Carousel>
        {dataCustomerCarrusel.map(content => content.items.map(
          item =>
            
            <Carousel.Item>
              <CustomerCarruselImg imagen={item.imagen} description={item.descripcion} author={item.autor} job={item.cargo}/>
            </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
