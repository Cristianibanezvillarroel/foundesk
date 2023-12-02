import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Alert, Button, Col, Modal, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types'
import ShoppingCartImg from '/public/shoppingcart.png'
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';

export const CoursesCards = ({ ListSize, page, limit, data }) => {

    class Item {
        constructor(idItem) {
            this.idItem = idItem
        }
    }

    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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



    useEffect(() => {
        ShoppingListStart()
    }, [])

    const ShoppingListStart = async () => {
        let shoppingList = []
        const ShoppingListGet = await localStorage.getItem('shoppingList')
        console.log(ShoppingListGet)
        if (ShoppingListGet === null) {
            console.log('storage vacio')
            setShoppingCount(0)
        } else {
            console.log('storage con registros')
            shoppingList = JSON.parse(ShoppingListGet)
            let shoppingListSize = shoppingList.length
            setShoppingCount(shoppingListSize)
        }
    }

    const shoppingListSet = async (item) => {
        let shoppingList
        //let item = new Item(idItem)
        let ShoppingListGet = await localStorage.getItem('shoppingList')
        if (ShoppingListGet === null) {
            shoppingList = []
        } else {
            shoppingList = JSON.parse(localStorage.getItem('shoppingList'))
        }

        shoppingList.push(item)
        await localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
        let shoppingListSize = shoppingList.length
        setShoppingCount(shoppingListSize)
    }

    const addLocalStorage = async (id) => {
        console.log(id)
        let shoppingList
        let idOk = 0;
        let ShoppingListGet = await localStorage.getItem('shoppingList')

        if (ShoppingListGet === null) {
            await shoppingListSet(id)
            setMessage('Este curso se ha agregado exitosamente al carro de compra')
            setShow(true)
            shoppingList = []
        } else {
            shoppingList = JSON.parse(localStorage.getItem('shoppingList'))
            shoppingList.forEach((item, index) => {
                if (item.idItem == id.idItem) {
                    setMessage('Este curso ya se encuentra registrado en el carro de compra')
                    setShow(true)
                    idOk = 1
                }
            })
            if (idOk == 0) {
                await shoppingListSet(id)
                setMessage('Este curso se ha agregado exitosamente al carro de compra')
                setShow(true)
            }
        }
    }

    console.log(shoppingCount)

    if (show) {
        return (
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregacion de curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Continuar comprando
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Carro de Compras
                    </Button>
                </Modal.Footer>
            </Modal>
        )
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
                                    <Button onClick={() => { addLocalStorage(content) }} id='courses-cards-button-shopping' variant='light'><img src={ShoppingCartImg} /></Button>
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