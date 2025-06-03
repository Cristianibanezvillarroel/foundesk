import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/User/UserContext";
import { Route, Routes } from "react-router-dom";

const PublicRoute = ({ element: Component, ...props }) => {

    const userCtx = useContext(UserContext)

    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const fetchUser = async () => {
        await verifyingToken()
        setLoading(false)
        }
        fetchUser()
    }, [authStatus])

    return (
        <>
            <Routes>
                <Route {...props} element={authStatus ? Component : Component} />
            </Routes>
        </>
    )
}

export default PublicRoute