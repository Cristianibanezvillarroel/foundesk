import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Button, Col, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types'
import ShoppingCart from '/public/shoppingcart.png'
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';

export const CoursesCards = ({ ListSize, page, limit, data }) => {

    const { shoppingCart, setShoppingCart } = useContext(ShoppingContext)

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

    const [storeLocalItems, setStoreLocalItems] = useState(null)

    useEffect((shoppingCart) => {
        storageLocalGet()
        storageLocalSet(shoppingCart)
      }, [])

    const storageLocalGet = async () => {
        const storeLocalItemsGet = await localStorage.getItem('shoppingList')
        /*if (typeof storeLocalItemsGet !== 'undefined'){
            setStoreLocalItems(storeLocalItemsGet)
        }                
        //setShoppingCart(storeLocalItems)
        return storeLocalItemsGet*/
    }

    const storageLocalSet = async (shoppingCart) => {
        const storeLocalItemsSet = await localStorage.setItem('shoppingList', shoppingCart)
    }

    const addLocalStorage = (id) => {
        console.log(id)
        console.log(shoppingCart)
        console.log(storeLocalItems)

        /*if (shoppingCart === 'null') {
            setShoppingCart([id])
            storageLocalSet(shoppingCart)
            console.log(shoppingCart)
        } else {
            setShoppingCart([id])
            storageLocalSet(shoppingCart)
            console.log(shoppingCart)
        }*/
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
                                    <Button onClick={() => { addLocalStorage(content.idItem) }} id='courses-cards-button-shopping' variant='light'><img src={ShoppingCart} /></Button>
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