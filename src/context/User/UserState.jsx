import React, { useReducer } from "react"
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axiosClient from "../../config/axios"

const UserState = (props) => {

    const initialState = {
        user: {
            name: null,
            email: null,
        },
        authStatus: false,
        loading: true,
        msg: null
    }

    const [globalState, dispatch] = useReducer(UserReducer, initialState)


    const registerUser = async (dataService) => {

        try {

            const respuesta = await axiosClient.post("/user/signup", dataService)

            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: respuesta.data
            })

        } catch (error) {
            console.log(error)
        }

    }

    const loginUser = async (dataService) => {

        try {

            const respuesta = await axiosClient.post("/user/login", dataService)
            const messageLogin = respuesta.data.message
            //console.log(respuesta)
            if (messageLogin == 'error de password' || messageLogin == 'usuario no encontrado') {
                dispatch({
                    type: "LOGIN_ERROR",
                    payload: messageLogin
                })
            } else {

                dispatch({
                    type: "LOGIN_EXITOSO",
                    payload: respuesta.data
                })
            }

        } catch (error) {
            dispatch({
                type: "LOGIN_ERROR"
            })
        }
    }

    const updateDataUser = async (dataService) => {

        try {

            const respuesta = await axiosClient.put("/user/update", dataService)

            dispatch({
                type: "ACTUALIZAR_USUARIO",
                payload: respuesta.data
            })

        } catch (error) {

            console.log(error)

        }

    }

    const updatePasswordUser = async (dataService) => {

        try {

            const respuesta = await axiosClient.post("/user/updatepassword", dataService)

        } catch (error) {

            console.log(error)

        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem('token')

        if (token) {
            axiosClient.defaults.headers.common['x-auth-token'] = token
        } else {
            delete axiosClient.defaults.headers.common['x-auth-token']
        }

        try {

            const respuesta = await axiosClient.get("/user/verify")
            //console.log(respuesta)
            dispatch({
                type: "OBTENER_USUARIO",
                payload: respuesta.data.user
            })

        } catch (error) {

            dispatch({
                type: "LOGIN_ERROR"
            })

        }

    }

    const logoutUser = async () => {

        dispatch({
            type: "LOGOUT_USUARIO"
        })

    }

    return (
        <UserContext.Provider value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            loading: globalState.loading,
            token: globalState.token,
            userId: globalState.userId,
            msg: globalState.msg,
            loginUser,
            registerUser,
            updateDataUser,
            updatePasswordUser,
            verifyingToken,
            logoutUser
        }}>
            {props.children}

        </UserContext.Provider>
    )
}

export default UserState