import { createContext, useState } from "react";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [shoppingCount, setShoppingCount] = useState(null)
    const [shoppingAmount, setShoppingAmount] = useState(null)
    
    return (
        <ShoppingContext.Provider value={{
            shoppingCount,
            setShoppingCount,
            shoppingAmount,
            setShoppingAmount
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}