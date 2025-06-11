import { Col, Container, Row } from 'react-bootstrap';
import CoursesLearnAccordion from './CoursesLearnAccordion';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export const CoursesLearnContents = ({ content }) => {

  console.log('CoursesLearnContents content', content)

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
      <Tabs defaultActiveKey="contenido" id="courses-learn-contents-tabs" className="mb-3">
        <Tab eventKey="contenido" title="Contenido">
          <div>{categoriesSize} Secciones - {itemsSize} Clases - {minutesSize} Minutos de duracion total.</div>
          {resultSections.map(
            sectionArray => sectionArray.map(
              section =>
                <Row>
                  <Col>
                    <CoursesLearnAccordion content={section} />
                  </Col>
                </Row>
            )
          )}
        </Tab>
        <Tab eventKey="ia" title="IA Asistant">
          <div style={{ minHeight: 200 }}>
            {/* Aquí puedes agregar el contenido del asistente IA */}
            Próximamente: Asistente IA para tu aprendizaje.
          </div>
        </Tab>
      </Tabs>
    </Container>
  )
}
