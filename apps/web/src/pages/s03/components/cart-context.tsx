import React, { createContext, useContext, useReducer, type ReactNode } from "react";
import { cartReducer, type Cart, type CartAction } from "./cart-reducer";



interface CartContextValue {
    cart: Cart;
    dispatch: React.Dispatch<CartAction>
}


const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, {});

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within CartProvider")
    }

    return context;
}