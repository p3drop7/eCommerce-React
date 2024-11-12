import React, { createContext, useReducer, useState, useEffect, useContext } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer";
import { child, get } from "firebase/database";
import { database } from "../data/useFirebase";
import { UserContext } from "./UserContext";

export const CartContext = createContext()

export function CartProvider({children}) {

    //State that opens/closes the cart list
    const [cartVisibility, setCartVisibility] = useState(false)

    const [state, dispatch] = useReducer (cartReducer, initialCartState)
    const { user } = useContext(UserContext)

    useEffect(() => {
        if ( user === false || user === undefined || user === "Incorrect Pasword" || user === "User not registered"){
            return
        } else {
            get( child (database, "carts/"))
                .then(res => res.val())
                .then(res => getCart(res, user.userName))
                .catch(error => console.log(error))
        }
    }, [user])

    const getCart = (response, user) => dispatch({
        type: "GET_CART",
        payload: {response, user}
    })

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
            getCart,
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