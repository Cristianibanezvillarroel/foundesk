const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/teacherannouncements`

export const teacherAnnouncementsService = async (dataService) => {

    const urlLogin = `${URL_ROOT}/course`
    const response = await fetch(urlLogin, dataService)
    const responseData = await response.json()
    return responseData
}