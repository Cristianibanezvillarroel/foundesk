import React, { useState } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import { BoundleCoursesAll } from '../boundlecomponents/BoundleCoursesAll'

export const BoundleCourses = () => {
    const [key, setKey] = useState("Todos")

    return (
        <>
            <Container>
                <div id='courses-head'>Cursos online </div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3">
                    <Tab eventKey="Todos" title="Todos">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="MisCursos" title="Mis Cursos">
                        Tab content for Profile
                    </Tab>
                </Tabs>
                {key == "Todos" ?
                    <BoundleCoursesAll />
                    :
                    <p>Mis cursos</p>
                }
            </Container>
        </>
    )
}
