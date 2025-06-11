import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import UserContext from '../context/User/UserContext.js';
import { MyCoursesCards } from '../components/courses/MyCoursesCards.jsx';
import { userGetCoursesService } from '../services/usercourses.js';

export const MyCourses = () => {
    const ctx = useContext(UserContext);
    const { user } = ctx;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);
    const [mydata, setMyData] = useState([]);
    const [size, setSize] = useState(0);

    useEffect(() => {
        if (user) {
            getMyDataV1();
        }
    }, [user]);

    const ListSize = (inputValue) => {
        setSize(inputValue);
    };

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
        };
        const responseData = await userGetCoursesService(dataService);
        //console.log(responseData);
        // Ajusta el parseo según la estructura de tu respuesta
        let arrayMyItems = [];
        responseData.forEach(List => {
            if (List.items) {
                arrayMyItems = arrayMyItems.concat(List.items);
            }
        });
        setMyData({ arrayMyItems });
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Container>
            <div id='courses-head'>Mis Cursos</div>
            <div>
                <MyCoursesCards ListSize={ListSize} page={page} limit={limit} mydata={mydata} />
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
        </Container>
    );
};
