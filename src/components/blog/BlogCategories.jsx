import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { blogCategoriesService } from '../../services/blogCategories';

export const BlogCategories = ({ onAddBlogCategory, setPage }) => {

    const [dataBlogs, setDataBlogs] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getDataV1()

        }, 10);
    }, [])

    const getDataV1 = async () => {

        const dataService = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const responseData = await blogCategoriesService(dataService)

        let arrayBlogCategories = []
        const ListFiltradaV1 = responseData.map(ListV1 => ListV1.items.map(
            item =>
                arrayBlogCategories.push(item)
        ))
        setDataBlogs(arrayBlogCategories)
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