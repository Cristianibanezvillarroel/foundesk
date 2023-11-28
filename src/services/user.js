import { useState } from "react"

const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/user`

export const userService = async (dataService) => {
    const [data, setData] = useState()
    const dataGet = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    if (dataService == 'GET') {
        setData(dataGet)
    } else {
        setData(dataService)
    }
    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}

export const loginService = async (dataService) => {
    const [data, setData] = useState()
    const dataGet = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    if (dataService == 'GET') {
        setData(dataGet)
    } else {
        setData(dataService)
    }
    const urlLogin = `${URL_ROOT}/login`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}

export const signupService = async (dataService) => {
    const [data, setData] = useState()
    const dataGet = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    if (dataService == 'GET') {
        setData(dataGet)
    } else {
        setData(dataService)
    }
    const urlLogin = `${URL_ROOT}/signup`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}