const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/customertestimonials`

export const customerTestimonialsService = async (dataService) => {

    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}