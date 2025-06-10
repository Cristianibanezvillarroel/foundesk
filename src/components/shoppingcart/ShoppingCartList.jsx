import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../context/Shopping/ShoppingContext'
import { Button, ListGroup, Row, Toast } from 'react-bootstrap'
import TrashShoppingCartImg from '/public/trash.png'
import UserContext from '../../context/User/UserContext';
import { userGetCoursesService } from '../../services/usercourses';

export const ShoppingCartList = () => {
  const ctx = useContext(UserContext);
  const { user } = ctx;
  const { shoppingCount, setShoppingCount, shoppingAmount, setShoppingAmount } = useContext(ShoppingContext)
  const [arrayStorage, setArrayStorage] = useState([])
  const options = {  maximumFractionDigits: 2   }
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
  
  useEffect(() => {
  const fetchEnrolledCourses = async () => {
    // Ajusta el userId según tu contexto de usuario
    const userId = user._id; // obtén el userId del contexto o props
    const dataService = {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: { 'Content-Type': 'application/json' }
    };
    const responseData = await userGetCoursesService(dataService);
    let ids = [];
    responseData.forEach(List => {
      if (List.items) {
        List.items.forEach(course => {
          ids.push(course.courses._id); // o course.courses si no está populado
        });
      }
    });
    setEnrolledCourseIds(ids);
  };
  fetchEnrolledCourses();
}, []);

  useEffect(() => {
    ShoppingListStart()
  }, [enrolledCourseIds])


  const ShoppingListStart = async () => {
    let shoppingList = []
    const ShoppingListGet = await localStorage.getItem('shoppingList')
    if (ShoppingListGet === null) {
      setShoppingCount(null)
    } else {
      shoppingList = JSON.parse(ShoppingListGet)
      // Filtrar cursos ya inscritos
      const enrolledList = shoppingList.filter(item => enrolledCourseIds.includes(item._id));
      const filteredShoppingList = shoppingList.filter(item => !enrolledCourseIds.includes(item._id));
      // Actualiza el localStorage con el array filtrado
      await localStorage.setItem('shoppingList', JSON.stringify(filteredShoppingList));
      let shoppingReduceMount = filteredShoppingList.reduce((acumulador, item) => {
        return acumulador + item.price
      }, 0)
      let shoppingListSize = filteredShoppingList.length
      setShoppingAmount(shoppingReduceMount)
      setShoppingCount(shoppingListSize)
      setArrayStorage([...filteredShoppingList, ...enrolledList])
    }
  }

  console.log("este es el array de items encontrados en ids:", enrolledCourseIds);
  
  const deleteItem = async (idItem) => {

    const arrayWithoutIdItem = arrayStorage.filter(item => {
      return item.idItem !== idItem
    })

    await localStorage.setItem('shoppingList', JSON.stringify(arrayWithoutIdItem))
    ShoppingListStart()
  }
  return (
    <>
      <Row>
        {(arrayStorage.length === 0 && enrolledCourseIds.length > 0) ? (
          <div style={{ color: 'green', fontWeight: 'bold', margin: '20px auto', textAlign: 'center' }}>
            Todos los cursos en tu carro ya están inscritos. ¡Felicidades!
          </div>
        ) : (
          <ListGroup as="ol" numbered>
            {arrayStorage.map((content, index) => {
              const isEnrolled = enrolledCourseIds.includes(content._id);
              return (
                <ListGroup.Item as="li" key={content.idItem}>
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <img id='boundle-shopping-img' src={content.imagen} className="rounded me-2" alt="" />
                      <strong className="me-auto">{content.author}</strong>
                      <small>{`CLP$${Intl.NumberFormat("en-US",options).format(content.price).replace(",", ".")}`}</small>
                    </Toast.Header>
                    <Toast.Body className='boundle-shoppingcart-list'>
                      <div>{content.title}</div>
                      {isEnrolled ? (
                        <div className="d-flex justify-content-between align-items-center" style={{ color: 'green', fontWeight: 'bold' }}>
                          <span>
                            Este curso ya está inscrito y no se totaliza en el carro.
                            <br />Puede eliminarlo ahora o se eliminará automáticamente al salir.
                          </span>
                          <Button variant='warning' className='ms-3' onClick={() => deleteItem(content.idItem)}>
                            Eliminar del carro
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Button variant='light' onClick={() => { deleteItem(content.idItem) }}><img id='shopping-cart-remove-img' src={TrashShoppingCartImg} />
                          </Button>
                        </div>
                      )}
                    </Toast.Body>
                  </Toast>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Row>
    </>
  )
}
