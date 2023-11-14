import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { ListContentsCourses } from '../components/ListContentsCourses.js'
import { CoursesCards } from '../components/courses/CoursesCards.jsx'

export const Courses = () => {

    const [coursesSelect, setCoursesSelect] = useState('Todos')
    const [size, setSize] = useState(0)
    const ListSize = (inputValue) => {
        setSize(inputValue + 1 )
    };
    return (
        <Container>
            <div>Cursos online </div>
            <div>{coursesSelect}</div>
            <div>
                <div>
                    {size} Resultados</div>
                <div>
                    <div>ORDENAR POR</div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                {coursesSelect}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {ListContentsCourses.map(courses =>
                                    <Dropdown.Item onClick={() => setCoursesSelect(courses.categoria)}>{courses.categoria}</Dropdown.Item>
                                )}
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => setCoursesSelect('Todos')}>Todos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div>
                <CoursesCards coursesSelect={coursesSelect} ListSize={ListSize}/>
            </div>
            <div>Courses</div>
            <div>Courses</div>
        </Container>
    )
}
