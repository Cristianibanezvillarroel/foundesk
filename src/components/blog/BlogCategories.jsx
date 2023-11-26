import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const BlogCategories = ({ onAddBlogCategory, setPage }) => {

    const [dataBlogs, setDataBlogs] = useState([]) 

    useEffect(() => {
        setTimeout(() => {
            getData()
            getDataV1()
        }, 10);
    }, [])

    const getDataV1 = async () => {

        const url = 'https://api-foundesk.onrender.com/v1/blogcategories';
        const responseV1 = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        const responseDataV1 = await responseV1.json()
        

        const ListFiltradaV1 = responseDataV1.filter(ListV1 => {
            return ListV1.message == 'BlogCategories'
        })
        console.log(responseDataV1)
        console.log(ListFiltradaV1)
    }

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