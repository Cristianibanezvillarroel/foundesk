import { Col, Container, Row, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import CoursesLearnNavContents from './courseslearnnav/CoursesLearnNavContents';
import CoursesLearnNavIaassistant from './courseslearnnav/CoursesLearnNavIaassistant';

export const CoursesLearnNavUp = ({ content }) => {
  const [activeKey, setActiveKey] = useState('contents');


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
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={setActiveKey}
        className="mb-0"
      >
        <Nav.Item>
          <Nav.Link eventKey="contents" className="courseslearn-nav-link">
            Contenido
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="iaassistant" className="courseslearn-nav-link">
            IA Assistant
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey === 'contents' && (
        <CoursesLearnNavContents sections={resultSections} />
      )}
      {activeKey === 'iaassistant' && (
        <CoursesLearnNavIaassistant />
      )}
    </Container >
  );
}
