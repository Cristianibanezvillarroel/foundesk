import React, { useEffect, useState } from 'react'
import { coursesContentItemsService } from '../../services/coursescontentitems';
import { Accordion, AccordionHeader, Col, Container, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { BsFillCaretRightSquareFill } from "react-icons/bs";

export const CoursesDetailContentsAccordion = ({ content }) => {

    return (
        <Accordion>
            <Accordion.Item eventKey='0'>
                <AccordionHeader>{content.name}</AccordionHeader>
                <AccordionBody>
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

                </AccordionBody>
            </Accordion.Item>
        </Accordion>

    )
}
