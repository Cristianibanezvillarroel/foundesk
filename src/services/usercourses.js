const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/usercourses`

export const userEnrollService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/enroll`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}

export const userGetCoursesService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/user`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}

export const coursesGetUsersService = async (dataService) => {

    const urlSignup = `${URL_ROOT}/courses`
    const response = await fetch(urlSignup, dataService)
    const responseData = await response.json()
    return responseData
}