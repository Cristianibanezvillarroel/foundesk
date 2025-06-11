import { Accordion, AccordionHeader, Col, Container, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { BsFillCaretRightSquareFill } from "react-icons/bs";

// Componente para mostrar el Accordion de categorías y items filtrados por IdItem
const CoursesLearnAccordion = ({ content }) => {

    console.log('CoursesLearnAccordion content', content);
    
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{content.name}</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        {content.items.map(itemArray =>
                            itemArray.map(
                                item =>
                                    <Row>
                                        <Col>
                                            <div id='courses-detail-content-accordion'>
                                                <div id='courses-detail-content-items'>
                                                    <div><BsFillCaretRightSquareFill /></div>
                                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</div>
                                                </div>
                                                <div>
                                                    <div id='courses-detail-content-minutes'>{item.minutes} min.</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                            )
                        )}
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default CoursesLearnAccordion;
