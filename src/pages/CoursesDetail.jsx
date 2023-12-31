import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Modal } from 'react-bootstrap'
import { coursesService } from '../services/courses'
import ShoppingCartImg from '/public/shoppingcart.png'
import { ShoppingContext } from '../context/ShoppingContext'
import CheckNok from '/public/checknok.png'
import CheckOk from '/public/checkok.png'

export const CoursesDetail = () => {

  const { id } = useParams()
  const [arrayItems, setArrayItems] = useState([])
  const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState()
  const [check, setCheck] = useState(false)
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [goShoppingNow, setGoShoppingNow] = useState(null)
    const navigate = useNavigate()
    const navigateShoppingCart = () => {
        navigate('/boundleshoppingcart')
    }


  useEffect(() => {
    setTimeout(() => {
      getDataV1()
    }, 10);
  }, [])

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

  const getDataV1 = async () => {

    const dataService = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const responseData = await coursesService(dataService)

    const ArrayItemsFilter = responseData.map(
      List => List.items.filter(
        item => item.idItem == id
      )
    )

    let itemsArray = ArrayItemsFilter[0]
    console.log(itemsArray)

    setArrayItems(itemsArray)
  }


  console.log(arrayItems)

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
      <Container>
        <div className='blog-detail-div'>
          {arrayItems.map(
            content =>
              <>
                <div>
                  <img id='blog-detail-img' src={content.imagen} />
                </div>
                <div>
                  <h3>{content.title}</h3>
                </div>
                <div>
                  <h5>{content.description}</h5>
                </div>
                <div>
                <Button onClick={() => { addLocalStorage(content) }} id='courses-cards-button-shopping' variant='light'><img src={ShoppingCartImg}  /></Button>
                <Button onClick={() => { addLocalStorage(content), setGoShoppingNow(true) }} variant='primary'>Comprar ahora</Button>
                </div>
              </>
          )}
        </div>
      </Container>
    </>
  )
}
