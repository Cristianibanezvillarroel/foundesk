const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/usercoursesprogress`

export const userCoursesProgressCreateService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/create`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}

export const userCoursesProgressGetService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/course/`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}

export const userCoursesProgressUpdateService = async (dataService) => {

    const urlSignup = `${URL_ROOT}/update/`
    const response = await fetch(urlSignup, dataService)
    const responseData = await response.json()
    return responseData
}