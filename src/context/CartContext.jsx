import React, { createContext, useReducer, useState } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer";

export const CartContext = createContext()

export function CartProvider({children}) {

    const [state, dispatch] = useReducer (cartReducer, initialCartState)
    const [cartVisibility, setCartVisibility] = useState(false)

    // Function to add an item to the cart
    const addItem = (item) => dispatch({
        type: 'ADD_ITEM',
        payload: item
    })

    // Function to remove 1 item counter from the cart
    const removeOneItem = (item) => dispatch({
        type: 'REMOVE_ITEM',
        payload: item
    })

    // Function to empty the items in the cart
    const emptyCart =(item) => dispatch({
        type: 'EMPTY_CART'
    })

    // Function to change the cart list visibility
    const changeCartVisibility = () => {
        setCartVisibility(!cartVisibility)
    }

    return (
        <CartContext.Provider value={{
            cart: state, 
            addItem,
            removeOneItem,
            emptyCart,
            cartVisibility,
            changeCartVisibility
        }}>
            {children}
        </CartContext.Provider>
    )
}