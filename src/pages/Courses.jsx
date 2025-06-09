import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Tab, Tabs } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { CoursesCards } from '../components/courses/CoursesCards.jsx'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useParams } from 'react-router-dom'
import { coursesCategoriesService } from '../services/coursescategories.js'
import { coursesService } from '../services/courses.js'
import UserContext from '../context/User/UserContext.js'
import { MyCoursesCards } from '../components/courses/MyCoursesCards.jsx'
import { userGetCoursesService } from '../services/usercourses.js'

export const Courses = () => {
    const [key, setKey] = useState("Todos")
    const ctx = useContext(UserContext)
    const { user } = ctx
    const { category } = useParams()
    const [coursesSelect, setCoursesSelect] = useState(category ? category : 'Todos')
    const [size, setSize] = useState(0)
    const ListSize = (inputValue) => {
        setSize(inputValue)
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [data, setData] = useState([])
    const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);


    const [dataCoursesTotal, setDataCoursesTotal] = useState([])


    useEffect(() => {
        setTimeout(() => {
            getCategoriesV1()
            getMyDataV1()
            getDataV1(coursesSelect)            
        }, 100);
    }, [])

    const getCategoriesV1 = async () => {

        const dataService = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const responseData = await coursesCategoriesService(dataService)

        const ListFiltrada = responseData.map(List => List.items.map(
            item => item
        ))
        let itemsArray = ListFiltrada[0]
        setDataCoursesTotal(itemsArray)
    }

    const getDataV1 = async (coursesSelect) => {

        const dataService = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const responseData = await coursesService(dataService)

        const ListFiltrada = responseData.filter(List => {
            return List.message == 'Courses';
        })

        let arrayItems = []
        const ListFiltradaData = responseData.map(ListV1 => {
            return coursesSelect == 'Todos' ?

                ListFiltrada.forEach(function (item) {
                    let itemsObject = item.items
                    for (let i = 0; i < itemsObject.length; i++) {
                        //arrayItems.push(itemsObject[i])
                        const course = itemsObject[i];
                        console.log("este es el course:", course);
                        console.log("este es el enrolledCourseIds:", enrolledCourseIds);
                        const isEnrolled = enrolledCourseIds.includes(course._id); // o course.idItem según tu modelo
                        //arrayItems.push(itemsObject[i])
                        arrayItems.push({ ...course, isEnrolled });
                    }
                })

                :
                ListFiltrada.forEach(function (item) {
                    let itemsObject = item.items.filter(
                        item => item.categorie.categorie == coursesSelect
                    )
                    for (let i = 0; i < itemsObject.length; i++) {
                        const course = itemsObject[i];
                        console.log("este es el course:", course);
                        const isEnrolled = enrolledCourseIds.includes(course._id); // o course.idItem según tu modelo
                        //arrayItems.push(itemsObject[i])
                        arrayItems.push({ ...course, isEnrolled });
                    }
                })

        })
        setData({ arrayItems })
    }

    const getMyDataV1 = async () => {

        const dataService = {
            method: 'POST',
            body: JSON.stringify({
                userId: user._id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const responseData = await userGetCoursesService(dataService)

        const ListFiltrada = responseData.filter(List => {
            return List.message == 'CoursesByUser';
        })

        let userCourseIds = [];
        ListFiltrada.forEach(item => {
            item.items.forEach(course => {
                userCourseIds.push(course.courses._id); // o course.course si el id está anidado
            });
        });
        console.log("este es el array de coursesId:",userCourseIds);
        setEnrolledCourseIds(userCourseIds);

        let arrayMyItems = [];

        const ListFiltradaData = responseData.map(ListV1 => {
            return coursesSelect == 'Todos' ?
                ListFiltrada.forEach(function (item) {
                    let itemsObject = item.items
                    for (let i = 0; i < itemsObject.length; i++) {
                        arrayMyItems.push(itemsObject[i])
                    }
                }) 
                : 
                ListFiltrada.forEach(function (item) {
                    let itemsObject = item.items
                    for (let i = 0; i < itemsObject.length; i++) {
                        arrayMyItems.push(itemsObject[i])
                    }
                })
        })        
    }
    
    return (
        <Container>
            <div id='courses-head'>Cursos online </div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">
                <Tab eventKey="Todos" title="Todos">
                    <div id='courses-selected'>{coursesSelect}</div>
                    <div className='courses-line-count'>
                        <div id='courses-line-count-left'>
                            {size} Resultados</div>
                        <div id='courses-line-count-right'>
                            <div id='courses-line-count-right-order'>ORDENAR POR</div>
                            <div >
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="courses-line-count-right-dropdown">
                                        {coursesSelect}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {dataCoursesTotal.map(content =>
                                            <Dropdown.Item onClick={() => { setCoursesSelect(content.categorie), setPage(1), getDataV1(content.categorie) }}>{content.categorie}</Dropdown.Item>
                                        )}
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={() => { setCoursesSelect('Todos'), setPage(1), getDataV1('Todos') }}>Todos</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div>
                        <CoursesCards ListSize={ListSize} page={page} limit={limit} data={data} />
                    </div>
                    <div id='courses-backtoup'>
                        <Button variant='light' onClick={goToTop}>
                            <span>&#8743;</span><span>&#160;&#160;</span>
                            Volver arriba
                        </Button>
                    </div>
                    <div>
                        <PaginationControl
                            page={page}
                            between={4}
                            total={size}
                            limit={4}
                            changePage={(page) => {
                                setPage(page)
                            }}
                            ellipsis={1}
                        />
                    </div>
                </Tab>
            </Tabs>

        </Container>
    )
}
