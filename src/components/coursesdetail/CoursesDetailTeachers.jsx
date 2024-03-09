import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { teacherService } from '../../services/teacher';
import { BsFillHeartPulseFill, BsPersonSquare, BsBank2, BsBookmarkCheck, BsPeopleFill, BsFillCollectionPlayFill, BsCheckSquare } from "react-icons/bs";

export const CoursesDetailTeachers = ({ content }) => {

  const [arrayItems, setArrayItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getDataV2()
    }, 10);
  }, [])

  const getDataV2 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseDataTeacher = await teacherService(dataService)

    const ArrayTeacherFilter = responseDataTeacher.map(
      List => List.items.filter(
        item => item._id == content.id_teacher
      )
    )

    setArrayItems(ArrayTeacherFilter[0])
  }

  return (
    <Container>
      <div className='courses-detail-teacher-title'>Instructor</div>
      {arrayItems.map(item =>
        <>
          <div id='courses-detail-teacher-name'>{item.name}</div>
          <div id='courses-detail-teacher-study'><BsCheckSquare />&nbsp;&nbsp;{item.pregrado} - {item.institucion_pregrado} - {item.postgrado} - {item.institucion_postgrado}</div>
          <div id='courses-detail-teacher-content'>
            <div><img id='courses-detail-teacher-imagen' src={item.imagen} /></div>
            <div>
              <div id='courses-detail-teacher-data'><BsFillHeartPulseFill />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Años de Experiencia: {item.experiencia}</div>
              <div id='courses-detail-teacher-data'><BsPersonSquare />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cargo: {item.cargo}</div>
              <div id='courses-detail-teacher-data'><BsBank2 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empresa: {item.empresa}</div>
              <div id='courses-detail-teacher-data'><BsBookmarkCheck />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valoraciones: {item.valoraciones}</div>
              <div id='courses-detail-teacher-data'><BsPeopleFill />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estudiantes: {item.estudiantes}</div>
              <div id='courses-detail-teacher-data'><BsFillCollectionPlayFill />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cursos: {item.cursos}</div>
            </div>
          </div>
          <div id='courses-detail-teacher-resena'>{item.resena}</div>
        </>
      )}
    </Container>

  )
}
