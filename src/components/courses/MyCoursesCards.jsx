import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Alert, Button, Col, Modal, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';

export const MyCoursesCards = ({ ListSize, page, limit, mydata }) => {

    //console.log(mydata);

    const navigate = useNavigate()

    const options = { maximumFractionDigits: 2 }

    let arrayItems = []

    let itera1 = Object.entries(mydata)
        .forEach(([key, value]) => {

            let itera2 = Object.entries(value)
                .forEach(([key2, value2]) => {

                    let itera3 = Object.entries(value2)
                        .forEach(([key3, value3]) => {

                            if (key3 == "courses") {
                                arrayItems.push(value3);
                            }
                        })
                })
        });

    //console.log('este es el arrayitems de mycoursescard:', arrayItems);

    const indexOfLastItem = page * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currentItems = arrayItems.slice(indexOfFirstItem, indexOfLastItem);

    const DESCRIPTION_CHAR_LIMIT = 50;

    const itemsLength = arrayItems.length;
    ListSize(itemsLength);

    return (

        <>
            <Row>
                {currentItems.map(content =>
                    <Col md={6} lg={3} className='mb-4'>
                        <Card key={content.idItem}>
                            <Card.Img variant="top" src={content.imagen} />
                            <Card.Body>
                                <Badge bg="secondary">{content.categorie.categorie}</Badge>
                                <Card.Title>
                                    <h6>{content.title.length > DESCRIPTION_CHAR_LIMIT ? content.title.substring(0, DESCRIPTION_CHAR_LIMIT) + '...' : content.title}</h6>
                                    <Link to={`/courses/${content.name}/learn/lectures/${content.idItem}`}>
                                        <Button>Empecemos a Aprender</Button>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <div id='courses-cards-author'>
                                        <div>Por {content.teacher?.name || "Sin profesor"}</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}

MyCoursesCards.propTypes = {
    ListSize: PropTypes.func.isRequired
}