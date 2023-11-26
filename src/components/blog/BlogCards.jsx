import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export const BlogCards = ({ ListSize, page, limit, data }) => {
    console.log(data)

    let arrayItems = []

    let itera1 = Object.entries(data)
        .forEach(([key, value]) => {

            let itera2 = Object.entries(value)
                .forEach(([key2, value2]) => {

                    arrayItems.push(value2)

                })
        });
    console.log(arrayItems)
    const indexOfLastItem = page * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currentItems = arrayItems.slice(indexOfFirstItem, indexOfLastItem);

    const DESCRIPTION_CHAR_LIMIT = 40;
    const DESCRIPTION_CHAR_LIMIT_TITLE = 55
    const DESCRIPTION_CHAR_LIMIT_DESCRIPTION = 80

    const itemsLength = arrayItems.length;
    ListSize(itemsLength);
    return (
        <>
            <Row>
                {currentItems.map(item =>
                    <Col md={4} className='mb-4'>
                        <Card key={item.idItem}>
                            <Card.Img variant="top" src={item.imagen} />
                            <Card.Body>
                                <Badge bg="secondary">{item.categoria}</Badge>
                                <Card.Title>{item.title.length > DESCRIPTION_CHAR_LIMIT_TITLE ? item.title.substring(0, DESCRIPTION_CHAR_LIMIT_TITLE) + '...' : item.title}</Card.Title>
                                <Card.Text>
                                    {item.description.length > DESCRIPTION_CHAR_LIMIT_DESCRIPTION ? item.description.substring(0, DESCRIPTION_CHAR_LIMIT_DESCRIPTION) + '...' : item.description}
                                </Card.Text>
                                <Link to={`/blog/${item.idItem}`}>
                                    <Button>Ver Contenido</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}

BlogCards.PropTypes = {
    ListSize: PropTypes.func.isRequired
}
