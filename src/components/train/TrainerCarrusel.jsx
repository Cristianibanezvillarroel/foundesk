import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { TrainerCarruselImg } from './TrainerCarruselImg';
import { trainerTestimonialsService } from '../../services/trainertestimonials';

export const TrainerCarrusel = () => {

  const [dataTrainerCarrusel, setDataTrainerCarrusel] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const getDataV1 = async () => {
    
    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    
    const responseData = await trainerTestimonialsService(dataService)
    

    const ListFiltrada = responseData.filter(List => {
      return List.message == 'TrainerTestimonials';
    })
    setDataTrainerCarrusel(ListFiltrada)
  }


  return (
    <>
      <Carousel>
        {dataTrainerCarrusel.map(content => content.items.map(
          item =>

            <Carousel.Item>
              <TrainerCarruselImg imagen={item.imagen} description={item.description} author={item.author} job={item.cargo} />
            </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}