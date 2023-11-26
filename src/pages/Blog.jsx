import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BlogCategories } from '../components/blog/BlogCategories'
import { BlogCards } from '../components/blog/BlogCards'
import { PaginationControl } from 'react-bootstrap-pagination-control'

export const Blog = () => {

    const [blogCategory, setBlogCategory] = useState('Todos')
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [data, setData] = useState([])
    const [size, setSize] = useState(0)
    const ListSize = (inputValue) => {
        setSize(inputValue)
    };


    const onAddBlogCategory = (blogCategoryValue) => {
        getData(blogCategoryValue)
        setBlogCategory(blogCategoryValue)
    }

    useEffect(() => {
        setTimeout(() => {
            getDataV1(blogCategory)
        }, 10);
    }, [])

    const getDataV1 = async (blogCategory) => {

        const url = 'https://api-foundesk.onrender.com/v1/blog';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        const responseData = await response.json()

        let ArrayItems = []
        const ListFiltrada = responseData.map(ListV1 => {
            return blogCategory == 'Todos' ?

            ListV1.items.map(
                item => ArrayItems.push(item)
            )
            
            :
            ListV1.items.map(
                item => ArrayItems.push(item)
            )

        })
        console.log(ArrayItems)
        setData({ArrayItems})
    }

    /*const getData = async (blogCategory) => {

        const url = 'https://api-foundesk.onrender.com/db/blogs';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        const responseData = await response.json()

        const ListFiltrada = responseData.filter(List => {
            return blogCategory == 'Todos' ? List.id >= 0 : List.categoria == blogCategory
        })
        setData({ListFiltrada})
    }
    console.log(data)

    console.log(blogCategory)*/

    return (
        <>
            <Container>
                <Row>
                    <Col md={2} className='mb-4 mt-4'>
                        <BlogCategories onAddBlogCategory={onAddBlogCategory} setPage={setPage}/>
                    </Col>
                    <Col className='mb-4 mt-4'>
                        <BlogCards ListSize={ListSize} page={page} limit={limit} data={data}/>
                    </Col>
                </Row>
                <div>
                <PaginationControl
                    page={page}
                    between={4}
                    total={size}
                    limit={6}
                    changePage={(page) => {
                        setPage(page)
                    }}
                    ellipsis={1}
                />
            </div>
            </Container>
        </>
    )
}
