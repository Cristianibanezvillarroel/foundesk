import React, { useState } from 'react'
import { ListContentsBlogs } from '../ListContentsBlogs'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const BlogCategories = ({onAddBlogCategory, setPage}) => {
const getCategory = (category) => {
    onAddBlogCategory(category)
}

    return (
        <>
        <div className='blog-categories'>
            {ListContentsBlogs.map(
                content =>
                    <Button onClick={() => {getCategory(content.categoria), setPage(1)} } variant='light' >{content.categoria}</Button>
            )}
            <Button onClick={() => {getCategory('Todos')}} variant='light' >Todos</Button>
        </div>
        </>
    )
}

BlogCategories.PropTypes = {
    onAddBlogCategory: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired
}