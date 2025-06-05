import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Tab, Tabs } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { CoursesCards } from '../components/courses/CoursesCards.jsx'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useParams } from 'react-router-dom'
import { coursesCategoriesService } from '../services/coursescategories.js'
import { coursesService } from '../services/courses.js'
import UserContext from '../context/User/UserContext.js'

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

    useEffect(() => {
        if (user) {
            setKey("MisCursos");
        } else {
            setKey("Todos");
        }
        }, [user]
    );

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [data, setData] = useState([])

    const [dataCoursesTotal, setDataCoursesTotal] = useState([])


    useEffect(() => {
        setTimeout(() => {
            getCategoriesV1()
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
                        arrayItems.push(itemsObject[i])
                    }
                })

                :
                ListFiltrada.forEach(function (item) {
                    let itemsObject = item.items.filter(
                        item => item.id_categoria.categoria == coursesSelect
                    )
                    for (let i = 0; i < itemsObject.length; i++) {
                        arrayItems.push(itemsObject[i])
                    }
                })

        })
        setData({ arrayItems })
    }

    return (
        <Container>
            <div id='courses-head'>Cursos online </div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">
                {user ? (
                <Tab eventKey="MisCursos" title="Mis Cursos">
                    Tab content for Profile
                </Tab>
                ) : ( 
                null
                )}
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
                                            <Dropdown.Item onClick={() => { setCoursesSelect(content.id_categoria.categoria), setPage(1), getDataV1(content.id_categoria.categoria) }}>{content.id_categoria.categoria}</Dropdown.Item>
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
