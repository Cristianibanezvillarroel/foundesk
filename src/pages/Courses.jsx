import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { CoursesCards } from '../components/courses/CoursesCards.jsx'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useParams } from 'react-router-dom'
import { coursesCategoriesService } from '../services/coursescategories.js'
import { coursesService } from '../services/courses.js'

export const Courses = () => {

    const {category} = useParams()
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
    const [limit, setLimit] = useState(2)
    const [data, setData] = useState([])

    const [dataCoursesTotal, setDataCoursesTotal] = useState([])


    useEffect(() => {
        setTimeout(() => {
            getCategoriesV1()
            getDataV1(coursesSelect)
        }, 100);
    }, [])

    const getCategoriesV1 = async () => {

        const dataService = 'GET'

        const responseData = await coursesCategoriesService(dataService)       

        const ListFiltrada = responseData.map(List => List.items.map(
            item => item
        ))
        let itemsArray = ListFiltrada[0]
        setDataCoursesTotal(itemsArray)
    }

    const getDataV1 = async (coursesSelect) => {

        const dataService = 'GET'

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
                        item => item.categoria == coursesSelect
                    )
                    for (let i = 0; i < itemsObject.length; i++) {
                        arrayItems.push(itemsObject[i])
                    }
                })

        })
        console.log(arrayItems)
        setData({ arrayItems })
    }

    return (
        <Container>
            <div id='courses-head'>Cursos online </div>
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
                                    <Dropdown.Item onClick={() => { setCoursesSelect(content.categoria), setPage(1), getDataV1(content.categoria) }}>{content.categoria}</Dropdown.Item>
                                )}
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => { setCoursesSelect('Todos'), setPage(1),getDataV1('Todos') }}>Todos</Dropdown.Item>
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
                    limit={2}
                    changePage={(page) => {
                        setPage(page)
                    }}
                    ellipsis={1}
                />
            </div>
        </Container>
    )
}
