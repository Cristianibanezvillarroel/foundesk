import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const BlogCategories = ({ onAddBlogCategory, setPage }) => {

    const [dataBlogs, setDataBlogs] = useState([]) 

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 10);
    }, [])

    const getData = async () => {

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
            return List.id >= 0
        })
        setDataBlogs(ListFiltrada)
    }

    const getCategory = (category) => {
        onAddBlogCategory(category)
    }

    return (
        <>
            <div className='blog-categories'>
                {dataBlogs.map(
                    content =>
                        <Button onClick={() => { getCategory(content.categoria), setPage(1) }} variant='light' >{content.categoria}</Button>
                )}
                <Button onClick={() => { getCategory('Todos') }} variant='light' >Todos</Button>
            </div>
        </>
    )
}

BlogCategories.PropTypes = {
    onAddBlogCategory: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired
}