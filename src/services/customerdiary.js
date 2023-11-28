import { useState } from "react"

const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/customerdiary`

const dataGet = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}


export const customerDiaryService = async (dataService) => {
    const [data, setData] = useState()
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