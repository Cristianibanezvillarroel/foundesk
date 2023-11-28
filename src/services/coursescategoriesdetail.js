const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/coursescategoriesdetail`

const dataGet = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

export const coursesCategoriesDetailService = async (dataService) => {

    if(dataService == 'GET'){
        data = dataGet
    } else {
        data = dataService
    }
    const urlLogin = `${URL_ROOT}`
    const response = await fetch(urlLogin, data)
    const responseData = await response.json()
    return responseData
}