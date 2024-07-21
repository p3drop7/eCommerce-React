import React, { createContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer";

export const CartContext = createContext()

export function CartProvider({children}) {

    const [state, dispatch] = useReducer(cartReducer, initialCartState)

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
    const empyCart =(item) => dispatch({
        type: 'EMPTY_CART'
    })

    return (
        <CartContext.Provider value={{
            cart: state, 
            addItem,
            removeOneItem,
            empyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}