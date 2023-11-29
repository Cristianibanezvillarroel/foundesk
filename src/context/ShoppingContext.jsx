import { createContext, useState } from "react";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState(null)
    
    return (
        <ShoppingContext.Provider value={{
            shoppingCart,
            setShoppingCart
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}