import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Alert, Button, Col, Modal, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types'
import ShoppingCartImg from '/public/shoppingcart.png'
import CheckNok from '/public/checknok.png'
import CheckOk from '/public/checkok.png'
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../context/Shopping/ShoppingContext'

export const CoursesCards = ({ ListSize, page, limit, data }) => {

    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState()
    const [check, setCheck] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [goShoppingNow, setGoShoppingNow] = useState(null)
    const navigate = useNavigate()
    const navigateShoppingCart = () => {
        navigate('/shoppingcart')
    }
    const options = { maximumFractionDigits: 2 }

    let arrayItems = []

    let itera1 = Object.entries(data)
        .forEach(([key, value]) => {
            let itera2 = Object.entries(value)
                .forEach(([key2, value2]) => {
                    arrayItems.push(value2)
                })
        });

    const indexOfLastItem = page * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currentItems = arrayItems.slice(indexOfFirstItem, indexOfLastItem);

    const DESCRIPTION_CHAR_LIMIT = 50;

    const itemsLength = arrayItems.length;
    //ListSize(itemsLength);
    useEffect(() => {
        if (typeof ListSize === 'function') {
            ListSize(itemsLength);
        }
    }, [itemsLength, ListSize]);

    useEffect(() => {
        ShoppingListStart()
    }, [])

    const ShoppingListStart = async () => {
        let shoppingList = []
        const ShoppingListGet = await localStorage.getItem('shoppingList')
        if (ShoppingListGet === null) {
            setShoppingCount(null)
        } else {
            shoppingList = JSON.parse(ShoppingListGet)
            let shoppingListSize = shoppingList.length
            setShoppingCount(shoppingListSize)
        }
    }

    const shoppingListSet = async (content) => {
        let shoppingList
        let ShoppingListGet = await localStorage.getItem('shoppingList')
        if (ShoppingListGet === null) {
            shoppingList = []
        } else {
            shoppingList = JSON.parse(localStorage.getItem('shoppingList'))
        }

        shoppingList.push(content)
        await localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
        let shoppingListSize = shoppingList.length
        setShoppingCount(shoppingListSize)
    }

    const addLocalStorage = async (content) => {
        let shoppingList
        let idOk = 0;
        let ShoppingListGet = await localStorage.getItem('shoppingList')

        if (ShoppingListGet === null) {
            await shoppingListSet(content)
            setMessage(`El curso ${content.title} se ha agregado exitosamente al carro de compra`)
            setShow(true)
            setCheck(true)
            shoppingList = []
        } else {
            shoppingList = JSON.parse(localStorage.getItem('shoppingList'))
            shoppingList.forEach((item, index) => {
                if (item.idItem == content.idItem) {
                    setMessage(`El curso ${content.title} ya se encuentra registrado en el carro de compra`)
                    setShow(true)
                    setCheck(false)
                    idOk = 1
                }
            })
            if (idOk == 0) {
                await shoppingListSet(content)
                setMessage(`El curso ${content.title} se ha agregado exitosamente al carro de compra`)
                setShow(true)
                setCheck(true)
            }
        }
    }

    if (show) {
        return (
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Registro</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <div style={{ textAlign: 'center' }}><img style={{ textAlign: 'center' }} src={check ? CheckOk : CheckNok} /></div>
                    <div style={{ textAlign: 'left' }}>{message}</div>
                </Modal.Body>
                <Modal.Footer>
                    {
                        goShoppingNow ?
                            <Button variant="primary" onClick={navigateShoppingCart}>
                                Ir al carro
                            </Button>
                            :
                            <>
                                <Button variant="secondary" onClick={handleClose}>
                                    Continuar comprando
                                </Button>
                                <Button variant="primary" onClick={navigateShoppingCart}>
                                    Ir al carro
                                </Button>
                            </>
                    }

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
                            <Card.Img variant="top" src={content.image} />
                            <Card.Body>
                                <Badge bg="secondary">{content.categorie.categorie}</Badge>
                                <Card.Title>
                                    <h6>{content.title.length > DESCRIPTION_CHAR_LIMIT ? content.title.substring(0, DESCRIPTION_CHAR_LIMIT) + '...' : content.title}</h6>
                                    <Link
                                        to={{
                                            pathname: `/courses/detail/${content.name}`,
                                        }}
                                        state={{ isEnrolled: content.isEnrolled }}
                                    >
                                        <Button>Ver mas</Button>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <div id='courses-cards-author'>
                                        <div>Por {content.teacher?.name || "Sin profesor"}</div>
                                    </div>



                                    <div id='courses-cards-price'>
                                        {`CLP$${Intl.NumberFormat("en-US", options).format(content.price).replace(",", ".")}`}
                                    </div>
                                    {!content.isEnrolled && (
                                        <>
                                            <Button onClick={() => { addLocalStorage(content) }} id='courses-cards-button-shopping' variant='light'><img src={ShoppingCartImg} /></Button>
                                            <Button onClick={() => { addLocalStorage(content), setGoShoppingNow(true) }} variant='primary'>Comprar ahora</Button>
                                        </>
                                    )}
                                    <>
                                        {content.isEnrolled && (
                                            <Button variant='success' disabled>Inscrito</Button>
                                        )}
                                    </>
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