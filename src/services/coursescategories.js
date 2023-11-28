import { useState } from "react"

const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/coursescategories`

export const coursesCategoriesService = async (dataService) => {
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