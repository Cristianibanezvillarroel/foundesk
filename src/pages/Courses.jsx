import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { ListContentsCourses } from '../components/ListContentsCourses.js'
import { CoursesCards } from '../components/courses/CoursesCards.jsx'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useParams } from 'react-router-dom'

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

    useEffect(() => {
        setTimeout(() => {
            getData(coursesSelect)
        }, 1000);
    }, [])

    const getData = async (coursesSelect) => {

        const ListFiltrada = await ListContentsCourses.filter(List => {
            return coursesSelect == 'Todos' ? List.id >= 0 : List.categoria == coursesSelect
        })
        setData({ListFiltrada})
    }


    console.log(data);
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
                                {ListContentsCourses.map(content =>
                                    <Dropdown.Item onClick={() => { setCoursesSelect(content.categoria), setPage(1), getData(content.categoria) }}>{content.categoria}</Dropdown.Item>
                                )}
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => { setCoursesSelect('Todos'), setPage(1),getData('Todos') }}>Todos</Dropdown.Item>
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
