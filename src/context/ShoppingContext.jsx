import { createContext, useState } from "react";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [shoppingCount, setShoppingCount] = useState(null)
    
    return (
        <ShoppingContext.Provider value={{
            shoppingCount,
            setShoppingCount
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}