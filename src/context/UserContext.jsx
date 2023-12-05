import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [ token, setToken ] = useState(null)
    const [ user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{
            token,
            setToken,
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}