const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/user`

export const userService = async (data) => {
    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}

export const loginService = async (data) => {
    const urlLogin = `${URL_ROOT}/login`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}

export const signupService = async (data) => {
    const urlLogin = `${URL_ROOT}/signup`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}