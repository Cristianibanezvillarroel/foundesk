import { useContext, useEffect, useState } from "react"
import UserContext from "../../context/User/UserContext"
import { Navigate, Route, Routes } from "react-router-dom"

const AuthRoute = ({ element: Component, ...props }) => {

    const userCtx = useContext(UserContext)
    const { authStatus, verifyingToken } = userCtx
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
        await verifyingToken()
        setLoading(false)
        }
        fetchUser()
    }, [authStatus])

    return (
        <>
            <Routes>
                <Route {...props} element={authStatus ?  <Navigate to="/my-courses" /> : Component} />
            </Routes>
        </>
    )
}

export default AuthRoute