import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Col, Row } from 'react-bootstrap';
import { ListContentsCourses } from '../ListContentsCourses'
import { PropTypes } from 'prop-types'

export const CoursesCards = ({coursesSelect, ListSize}) => {
    
    console.log(coursesSelect)


    const ListFiltrada = ListContentsCourses.filter(List => {

        return coursesSelect == 'Todos' ? List.id > 0 : List.categoria == coursesSelect
    })

    ListSize(ListFiltrada.length);
    return (
        <>
            <Row>
                {ListFiltrada.map(content => content.items.map(
                    item =>

                        <Col md={6} lg={3} className='mb-4'>
                            <Card>
                                <Card.Img variant="top" src={item.imagen} />
                                <Card.Body>
                                    <Badge bg="secondary">{item.tipo}</Badge>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                ))}
            </Row>
        </>
    )
}

CoursesCards.propTypes = {
    ListSize: PropTypes.func.isRequired
}