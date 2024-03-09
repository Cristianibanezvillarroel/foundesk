import React, { useEffect, useState } from 'react'
import { coursesContentCategoriesService } from '../../services/coursescontentcategories';
import { coursesContentItemsService } from '../../services/coursescontentitems';
import { Col, Container, Row } from 'react-bootstrap';
import { CoursesDetailContentsAccordion } from './CoursesDetailContentsAccordion';

export const CoursesDetailContents = ({ content }) => {

  useEffect(() => {
    setTimeout(() => {
      getDataV2()
    }, 10);
  }, [])

  const [arrayCategories, setArrayCategories] = useState([])
  const [arrayItems2, setArrayItems2] = useState([])
  const [categoriesSize, setCategoriesSize] = useState(0)
  const [itemsSize, setItemsSize] = useState(0)
  const [minutesSize, setMinutesSize] = useState(0)

  const getDataV2 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseDataCategories = await coursesContentCategoriesService(dataService)

    const ArrayCategoriesFilter = responseDataCategories.map(
      List => List.items.filter(
        item => item.id_courses == content._id
      )
    )

    const ListCategoriesSize = ArrayCategoriesFilter[0].length

    setCategoriesSize(ListCategoriesSize)

    let CategoriesArray = []

    ArrayCategoriesFilter.forEach(function (item) {
      for (let i = 0; i < ArrayCategoriesFilter[0].length; i++) {
        CategoriesArray.push(item[i])
      }
    })

    setArrayCategories(CategoriesArray)

    const responseDataItems = await coursesContentItemsService(dataService)

    const ArrayItemsFilter = responseDataItems.map(
      List => List.items.filter(
        item => item.id_courses == content._id
      )
    )

    const ListItemsSize = ArrayItemsFilter[0].length
    
    setItemsSize(ListItemsSize)

    let ItemsArray = []

    ArrayItemsFilter.forEach(function (item) {
      for (let i = 0; i < ArrayItemsFilter[0].length; i++) {
        ItemsArray.push(item[i])
      }
    })

    let reduceMinutes = ItemsArray.reduce((acumulador, minutes) => {
      return acumulador + minutes.minutes;
    }, 0)

    setMinutesSize(reduceMinutes)
  
    setArrayCategories(CategoriesArray)

  }

  return (
    <Container>
      <div className='courses-detail-content-title'>Contenido del Curso</div>
      <div>{categoriesSize} Secciones - {itemsSize} Clases - {minutesSize} Minutos de duracion total.</div>
      {arrayCategories.map(content =>
        <Row>
          <Col>
            <CoursesDetailContentsAccordion content={content} />
          </Col>
        </Row>
      )}
    </Container>
  )
}
