import { Col, Container, Row, Nav } from 'react-bootstrap';
import CoursesLearnAccordion from './CoursesLearnAccordion';
import React, { useState } from 'react';

export const CoursesLearnContents = ({ content }) => {
  const [activeKey, setActiveKey] = useState('contenido');

  
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
      <Nav variant="tabs" activeKey={activeKey} onSelect={setActiveKey} className="mb-0">
        <Nav.Item>
          <Nav.Link eventKey="contenido" className='courseslearn-nav-link'>Contenido</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ia" className='courseslearn-nav-link'>IA Assistant</Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey === 'contenido' && (
        <div style={{ marginTop: 0 }}>
          {resultSections.map(
            sectionArray => sectionArray.map(
              section =>
                <Row key={section._id} className="mt-0">
                  <Col>
                    <CoursesLearnAccordion content={section} />
                  </Col>
                </Row>
            )
          )}
        </div>
      )}
      {activeKey === 'ia' && (
        <div style={{ minHeight: 200 }}>
          Próximamente: Asistente IA para tu aprendizaje.
        </div>
      )}
    </Container>
  );
}
