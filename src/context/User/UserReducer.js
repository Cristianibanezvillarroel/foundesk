const UserReducer = (globalState, action) => {

    switch (action.type) {
        case "LOGIN_EXITOSO":
        case "REGISTRO_EXITOSO":
            localStorage.setItem("token", action.payload.detail.token)

            return {
                ...globalState,
                authStatus: true,

            }

        case "OBTENER_USUARIO":
            return {
                ...globalState,
                authStatus: true,
                user: action.payload
            }

        case "LOGIN_ERROR":
            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload,
            }
        case "LOGOUT_USUARIO":
            localStorage.removeItem("token")

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: null,
            }

        case "ACTUALIZAR_USUARIO":
            return {
                ...globalState,
                user: action.payload.detail.user
            }

        default:
            return globalState
    }
}

export default UserReducer