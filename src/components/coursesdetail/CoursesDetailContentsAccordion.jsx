import React, { useEffect, useState } from 'react'
import { coursesContentItemsService } from '../../services/coursescontentitems';
import { Accordion, AccordionHeader, Col, Container, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { BsFillCaretRightSquareFill } from "react-icons/bs";

export const CoursesDetailContentsAccordion = ({ content }) => {
    const [arrayItems, setArrayItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getDataV2()
        }, 10);
    }, [])

    const getDataV2 = async () => {

        const dataService = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        const responseDataItems = await coursesContentItemsService(dataService)
        const ArrayItemsFilter = responseDataItems.map(
            List => List.items.filter(
                item => item.id_courses_content_categories == content._id
            )
        )
        
        let itemsArray = []
        ArrayItemsFilter.forEach(function (item) {
            for (let i = 0; i < ArrayItemsFilter[0].length; i++) {
                itemsArray.push(item[i])
            }
        })

        setArrayItems(itemsArray)

    }


    return (
        <Accordion>
            <Accordion.Item eventKey='0'>
                <AccordionHeader>{content.name}</AccordionHeader>
                <AccordionBody>
                    <Container>
                        {arrayItems.map(item =>
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
                        )}
                    </Container>

                </AccordionBody>
            </Accordion.Item>
        </Accordion>

    )
}
