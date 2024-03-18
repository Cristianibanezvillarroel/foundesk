import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Calificacionesimg from '/public/calificaciones.png'
import { BsCalendar3 } from "react-icons/bs";

export const CoursesDetailTestimonialsCard = ({ item }) => {

  console.log(item)
  
  let textOne = item.author
  let letterOne = textOne.charAt(0)
  let textSplit = textOne.split(' ')
  let letterTwo = textSplit[1].charAt(0)
  let timestamp = item.timestamp.split('T')
  let dateActual = new Date().getTime()
  let dateDesde = new Date(item.timestamp).getTime()
  let diff = dateActual - dateDesde
  let diffMinutes = diff / (1000 * 60)


  const minutosATiempo = minutos => {
    const leyenda = (numero, palabra, plural) => numero === 0 || numero > 1 ? `${numero} ${palabra}${plural || "s"}` : `${numero} ${palabra}`;
    const MINUTOS_POR_HORA = 60,
      HORAS_POR_DIA = 24,
      DIAS_POR_SEMANA = 7,
      DIAS_POR_MES = 30,
      MESES_POR_ANIO = 12;
    if (minutos < MINUTOS_POR_HORA) return leyenda(minutos, "minuto");
    let horas = Math.floor(minutos / MINUTOS_POR_HORA),
      minutosSobrantes = minutos % MINUTOS_POR_HORA;
    if (horas < HORAS_POR_DIA) return leyenda(horas, "hora") + (minutosSobrantes > 0 ? ", " + minutosATiempo(minutosSobrantes) : "");
    let dias = Math.floor(horas / HORAS_POR_DIA);
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA);
    if (dias < DIAS_POR_SEMANA) return leyenda(dias, "día") + (minutosSobrantes > 0 ? ", " + minutosATiempo(minutosSobrantes) : "");
    let semanas = Math.floor(horas / (HORAS_POR_DIA * DIAS_POR_SEMANA));
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA * DIAS_POR_SEMANA);
    if (dias < DIAS_POR_MES) return leyenda(semanas, "semana") + (minutosSobrantes > 0 ? ", " + minutosATiempo(minutosSobrantes) : "");
    let meses = Math.floor(horas / (HORAS_POR_DIA * DIAS_POR_MES));
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA * DIAS_POR_MES);
    if (meses < MESES_POR_ANIO) return leyenda(meses, "mes", "es") + (minutosSobrantes > 0 ? ", " + minutosATiempo(minutosSobrantes) : "");
    let anios = Math.floor(horas / (HORAS_POR_DIA * DIAS_POR_MES * MESES_POR_ANIO));
    minutosSobrantes = minutos % (MINUTOS_POR_HORA * HORAS_POR_DIA * DIAS_POR_MES * MESES_POR_ANIO);
    return leyenda(anios, "año") + (minutosSobrantes > 0 ? ", " + minutosATiempo(minutosSobrantes) : "");
  }

  let time = minutosATiempo(diffMinutes.toFixed(0))

  return (
    <Container className='courses-detail-testimonials-card'>
      <Row>
        <Col >
          <>
            <div id='courses-detail-testimonials-card-header'>
              <div id='courses-detail-testimonials-card-header-name'>
                {letterOne}{letterTwo}
              </div>
              <div id='courses-detail-testimonials-card-header-data'>
                <div>{item.author}</div>
                <div><img id='courses-detail-testimonials-calificacion' src={Calificacionesimg} /> {item.calificacion} </div>
                <div><BsCalendar3 id='courses-detail-testimonials-card-header-icon' />hace {time}</div>
              </div>
            </div>
            <div id='courses-detail-testimonials-card-body'>{item.description}</div>
          </>
        </Col>
      </Row>
    </Container>
  )
}
