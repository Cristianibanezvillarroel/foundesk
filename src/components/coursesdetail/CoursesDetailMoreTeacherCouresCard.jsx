import { Badge, Button, Card, Col, Container, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { PropTypes } from 'prop-types'

export const CoursesDetailMoreTeacherCoursesCard = ({ content, ListContent }) => {
  let authorArray = content.map(
    item => item.author
  )
  const DESCRIPTION_CHAR_LIMIT = 50;
  const options = { maximumFractionDigits: 2 }

  return (
    <>
    <Container>
    <div>Mas cursos de <span style={{ fontWeight: 'bold', color: 'blue' }}>{authorArray[0]}</span></div>
      <Row>
        {content.map(content =>

          <Col md={6} lg={3} className='mb-4'>
            <Card key={content.idItem}>
              <Card.Img variant="top" src={content.image} />
              <Card.Body>
                <Badge bg="secondary">{content.tipo}</Badge>
                <Card.Title>
                  <h6>{content.title.length > DESCRIPTION_CHAR_LIMIT ? content.title.substring(0, DESCRIPTION_CHAR_LIMIT) + '...' : content.title}</h6>
                  <Nav.Link as={Link} to={`/courses/detail/${content.idItem}`}>
                    <Button onClick={() => { ListContent(content.idItem) }}>Ver mas</Button>
                  </Nav.Link>
                </Card.Title>
                <Card.Text>
                  <div id='courses-cards-author'>
                    <div>Por {content.teacher}</div>
                  </div>
                  <div id='courses-cards-price'>
                    {`CLP$${Intl.NumberFormat("en-US", options).format(content.price).replace(",", ".")}`}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
      </Container>
    </>
  )
}

CoursesDetailMoreTeacherCoursesCard.propTypes = {
  ListContent: PropTypes.func.isRequired
}