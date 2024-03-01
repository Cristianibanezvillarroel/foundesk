import React, { useContext, useState } from 'react'
import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap'
import horasCoursesImg from '/public/horascurso.png'
import articulosCoursesImg from '/public/articuloscurso.png'
import recursosCoursesImg from '/public/recursoscurso.png'
import accesoCoursesImg from '/public/accesomovilescurso.png'
import timeCoursesImg from '/public/accesotimecursos.png'
import certificateCoursesImg from '/public/certificadocurso.png'
import { ShoppingContext } from '../../context/Shopping/ShoppingContext'
import CheckNok from '/public/checknok.png'
import CheckOk from '/public/checkok.png'
import { useNavigate } from 'react-router-dom'

export const CoursesDetailSideBar = ({ arrayItems }) => {

    const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState()
    const [check, setCheck] = useState(false)
    const handleClose = () => setShow(false)
    const [goShoppingNow, setGoShoppingNow] = useState(null)
    const navigate = useNavigate()
    const navigateShoppingCart = () => {
        navigate('/shoppingcart')
    }
    const options = { maximumFractionDigits: 2 }
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
        console.log(content)
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
            {arrayItems.map(
                content =>
                    <>
                        <Toast className='courses-detail-toast'>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className='courses-detail-toast-img'>
                                            <img src={content.imagen}></img>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='courses-detail-toast-div'>
                                    <h2 id='courses-detail-pricer'>{`${Intl.NumberFormat("en-US", options).format(content.price).replace(",", ".")} CLP$`}</h2>
                                </div>
                                <div className='courses-detail-toast-div'>
                                    <Button className='w-100' onClick={() => { addLocalStorage(content) }}>Añadir al carro</Button>
                                </div>
                                <div className='courses-detail-toast-div'>
                                    <Button className='w-100' onClick={() => { addLocalStorage(content), setGoShoppingNow(true) }} variant='light'>Comprar ahora</Button>
                                </div>
                                <div style={{ textAlign: 'center' }} className='courses-detail-toast-div'>Garantía de reembolso de 30 días</div>
                                <div className='courses-detail-toast-div'>Este curso incluye:</div>
                                <div className='courses-detail-toast-div'>
                                    <div>
                                        <div><img src={horasCoursesImg}></img>{content.horas}</div>
                                    </div>
                                    <div>
                                        <div><img src={articulosCoursesImg}></img>{content.articulos}</div>
                                    </div>
                                    <div>
                                        <div><img src={recursosCoursesImg}></img>{content.recursos}</div>
                                    </div>
                                    <div>
                                        <div><img src={accesoCoursesImg}></img>{content.acceso}</div>
                                    </div>
                                    <div>
                                        <div><img src={timeCoursesImg}></img>{content.timeline}</div>
                                    </div>
                                    <div>
                                        <div><img src={certificateCoursesImg}></img>{content.certificado}</div>
                                    </div>
                                </div>
                            </Container>
                        </Toast>
                    </>
            )}
        </>
    )
}
