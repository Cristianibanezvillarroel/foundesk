import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Button, Col, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types'
import ShoppingCartImg from '/public/shoppingcart.png'
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';

export const CoursesCards = ({ ListSize, page, limit, data }) => {

    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)

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

    const itemsLength = arrayItems.length;
    ListSize(itemsLength);

    const shoppingList = []

    useEffect(() => {
        ShoppingListStart()
    }, [])

    const ShoppingListStart = async () => {
        const ShoppingListGet = await localStorage.getItem('shoppingList')
        console.log(ShoppingListGet)
        if (ShoppingListGet === null) {
            console.log('storage vacio')
            await localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
            setShoppingCount(0)
        } else if (ShoppingListGet == 'null') {
            console.log('storage nulo')
            await localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
            setShoppingCount(0)
        } else {
            console.log('storage con registros')
            const shoppingListSize = shoppingList.length
            setShoppingCount(shoppingListSize)
            shoppingList.push(ShoppingListGet)
        }
    }

    const shoppingListSet = async (id) => {
        const ObjectId = {'idItem': id}
        shoppingList.push(ObjectId)
        const shoppingListSize = shoppingList.length + 1
        setShoppingCount(shoppingListSize)
        await localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
    }

    const addLocalStorage = async (id) => {
        await shoppingListSet(id)
        console.log(id)
        console.log(shoppingCount)
        console.log(shoppingList)
    }


    return (

        <>
            <Row>
                {currentItems.map(content =>

                    <Col md={6} lg={3} className='mb-4'>
                        <Card key={content.idItem}>
                            <Card.Img variant="top" src={content.imagen} />
                            <Card.Body>
                                <Badge bg="secondary">{content.tipo}</Badge>
                                <Card.Title>
                                    <h6>{content.title.length > DESCRIPTION_CHAR_LIMIT ? content.title.substring(0, DESCRIPTION_CHAR_LIMIT) + '...' : content.title}</h6>
                                    <Link to={`/courses/detail/${content.idItem}`}>
                                        <Button>Ver mas</Button>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <div id='courses-cards-author'>
                                        <p>Por {content.author}</p>
                                    </div>
                                    <div id='courses-cards-price'>
                                        {content.price}
                                    </div>
                                    <Button onClick={() => { addLocalStorage(content.idItem) }} id='courses-cards-button-shopping' variant='light'><img src={ShoppingCartImg} /></Button>
                                    <Button variant='primary'>Comprar ahora</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}

CoursesCards.propTypes = {
    ListSize: PropTypes.func.isRequired
}