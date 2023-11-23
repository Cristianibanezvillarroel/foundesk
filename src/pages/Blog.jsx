import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BlogCategories } from '../components/blog/BlogCategories'
import { BlogCards } from '../components/blog/BlogCards'
import { ListContentsBlogs } from '../components/ListContentsBlogs'
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
            getData(blogCategory)
        }, 10);
    }, [])

    const getData = (blogCategory) => {

        const ListFiltrada = ListContentsBlogs.filter(List => {
            return blogCategory == 'Todos' ? List.id >= 0 : List.categoria == blogCategory
        })
        setData({ListFiltrada})
    }
    console.log(data)

    console.log(blogCategory)

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
