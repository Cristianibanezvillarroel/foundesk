import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { TeacherCarruselImg } from './TeacherCarruselImg';
import { teacherTestimonialsService } from '../../services/teachertestimonials';

export const TeacherCarrusel = () => {

  const [dataTeacherCarrusel, setDataTeacherCarrusel] = useState([])

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
    
    const responseData = await teacherTestimonialsService(dataService)
    

    const ListFiltrada = responseData.filter(List => {
      return List.message == 'TeacherTestimonials';
    })
    setDataTeacherCarrusel(ListFiltrada)
  }


  return (
    <>
      <Carousel>
        {dataTeacherCarrusel.map(content => content.items.map(
          item =>

            <Carousel.Item>
              <TeacherCarruselImg imagen={item.teacher.user.image} description={item.description} author={item.teacher.user.name} job={item.teacher.jobtitle} />
            </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}