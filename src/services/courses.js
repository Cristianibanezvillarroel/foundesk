const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/courses`

export const coursesService = async (data) => {
    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}