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
    
    const dataService = 'GET'
    
    const responseData = await customerTestimonialsService(dataService)
    

    const ListFiltrada = responseData.filter(List => {
      return List.message == 'CustomerTestimonials';
    })
    setDataCustomerCarrusel(ListFiltrada)
  }


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
