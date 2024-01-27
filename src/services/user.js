const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/user`

export const userService = async (dataService) => {

    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}

export const loginService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/login`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}

export const signupService = async (dataService) => {

    const urlSignup = `${URL_ROOT}/signup`
    const response = await fetch(urlSignup, dataService)
    const responseData = await response.json()
    return responseData
}

export const updateService = async (dataService) => {

    const urlUpdateUserData = `${URL_ROOT}/update`
    const response = await fetch(urlUpdateUserData, dataService)
    const responseData = await response.json()
    return responseData
}

export const updatePasswordService = async (dataService) => {

    const urlUpdateUserPassword = `${URL_ROOT}/updatepassword`
    const response = await fetch(urlUpdateUserPassword, dataService)
    const responseData = await response.json()
    return responseData
}