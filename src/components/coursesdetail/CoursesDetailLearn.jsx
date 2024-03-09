import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { coursesLearnItemsService } from '../../services/courseslearnitems';
import { BsCheck } from "react-icons/bs";

export const CoursesDetailLearn = ({ content }) => {

  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

  const [arrayItems, setArrayItems] = useState([])
  const [arrayItems2, setArrayItems2] = useState([])

  const getDataV1 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await coursesLearnItemsService(dataService)

    const ArrayItemsFilter = responseData.map(
      List => List.items.filter(
        item => item.id_courses == content._id
      )
    )

    const ListItemsSize = ArrayItemsFilter[0].length
    const ListPart = (ListItemsSize / 2)
    const ListPartOne = ListPart.toFixed(0);
    const ListPartTwo = ListItemsSize - ListPartOne

    let itemsArray = []
    let itemsArray2 = []

    ArrayItemsFilter.forEach(function (item) {
      for (let i = 0; i < ListPartOne; i++) {
        itemsArray.push(item[i])
      }
    })

    ArrayItemsFilter.forEach(function (item) {
      for (let i = ListPartOne; i < ListItemsSize; i++) {
        itemsArray2.push(item[i])
      }
    })

    setArrayItems(itemsArray)
    setArrayItems2(itemsArray2)
  }


  return (
    <Container className='courses-detail-learn'>
      <Row>
        <div className='courses-detail-learn-title'>Lo que aprenderás</div>
      </Row>
      <Row>
        <Col md={6} className='mb-2'>
          <div>
            {arrayItems.map(
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
            {arrayItems2.map(
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
