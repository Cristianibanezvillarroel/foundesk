import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { coursesLearnItemsService } from '../../services/courseslearnitems';
import { BsCheck } from "react-icons/bs";

export const CoursesDetailLearn = ({ content }) => {

  let result = content.map(({ learn }) => learn)

  let result2 = result[0]
  let itemsArray = []
  let itemsArray2 = []
  if (result2) {

    const ListItemsSize = result2[0].length
    const ListPart = (ListItemsSize / 2)
    const ListPartOne = ListPart.toFixed(0);
    
    result2.forEach(function (item) {
      for (let i = 0; i < ListPartOne; i++) {
        itemsArray.push(item[i])
      }
    })

    result2.forEach(function (item) {
      for (let i = ListPartOne; i < ListItemsSize; i++) {
        itemsArray2.push(item[i])
      }
    })
  }

  return (
    <Container className='courses-detail-learn'>
      <Row>
        <div className='courses-detail-learn-title'>Lo que aprenderás</div>
      </Row>
      <Row>
        <Col md={6} className='mb-2'>
          <div>
            {itemsArray.map(
              item =>
                <>
                  <div id='courses-detail-learn-checked'>
                    <div><BsCheck /></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</div>
                  </div>
                </>
            )}
          </div>
        </Col>
        <Col md={6} className='mb-2'>
          <div>
            {itemsArray2.map(
              item =>
                <>
                  <div id='courses-detail-learn-checked'>
                    <div><BsCheck /></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</div>
                  </div>
                </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
