import React, { useEffect, useState } from 'react'
import { coursesContentCategoriesService } from '../../services/coursescontentcategories';
import { coursesContentItemsService } from '../../services/coursescontentitems';
import { Col, Container, Row } from 'react-bootstrap';
import { CoursesDetailContentsAccordion } from './CoursesDetailContentsAccordion';

export const CoursesDetailContents = ({ content }) => {

  let resultSections = content.map(({ sections }) => sections)
  let categoriesSize;
  let itemsSize;
  let arrayMinutes;
  let minutesSize;

  let resultSections2 = resultSections[0]
  if (resultSections2) {
    categoriesSize = resultSections2.length

    let resultSectionsItems = resultSections2.map(({ items }) => items)
    itemsSize = resultSectionsItems.reduce((acumulador, numero) => {
      return acumulador + numero[0].length
    }, 0)

    arrayMinutes = resultSectionsItems.map(
      item =>
        item.map(
          subitem =>
            subitem.reduce((acumulador2, numero2) => {
              return acumulador2 + numero2.minutes
            }, 0)
        ))

    minutesSize = arrayMinutes.reduce((acumulador, numero) => {
      return acumulador + numero[0]
    }, 0)
  }

  return (
    <Container>
      <>
        <div className='courses-detail-content-title'>Contenido del Curso</div>
        <div>{categoriesSize} Secciones - {itemsSize} Clases - {minutesSize} Minutos de duracion total.</div>
        {resultSections.map(
          sectionArray => sectionArray.map(
            section =>
              <Row>
                <Col>
                  <CoursesDetailContentsAccordion content={section} />
                </Col>
              </Row>
          )
        )}
      </>
    </Container>
  )
}
