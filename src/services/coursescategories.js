import { useState } from "react"

const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/coursescategories`

export const coursesCategoriesService = async (dataService) => {

    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}