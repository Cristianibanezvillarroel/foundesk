const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/mercadopago`

export const mercadoPagoService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/checkout`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}