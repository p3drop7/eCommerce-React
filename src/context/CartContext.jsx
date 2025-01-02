import React, { createContext, useReducer, useState, useEffect, useContext } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer";
import { child, get, set, ref } from "firebase/database";
import { database } from "../data/useFirebase";
import { UserContext } from "./UserContext";

export const CartContext = createContext()

/* 
CartProvider is exported to provide the needed functionality for the shopping cart.
It uses the useReducer hook to manage the state of the cart and the useContext hook to access the cart data and functions.
"Dispatch" triggers the needed funtion to update the state.
*/
export function CartProvider({children}) {

    /* State of the cart with products, prices, quiantities. It is saved as:
        username {
            products {
                [ {id, image, price, quantity, title, total} ]
            },
            totalPrice,
            totalQuantity
        }
    */    
    const [state, dispatch] = useReducer (cartReducer, initialCartState)

    // State that opens/closes the cart list
    const [cartVisibility, setCartVisibility] = useState(false)

    // State uf the user from UserContext.jsx
    const { user } = useContext(UserContext)

    // The useEffect hook checks if there is any information about the user (if the user is logged in or not)
    // If the user is logged in, the it pull the user info and the cart if there is any.
    // Also, if the user info changes or if it logs out, then the cart is also emptied
    useEffect(() => {
        if ( user === null || user === undefined || user === "Incorrect Pasword" || user === "User not registered"){
            emptyCart()
        } else {
            get( child ( ref(database), "carts/"))
                .then(res => res.val())
                // If there is any respones from Firebase, the getCart function is triggered to save the cart.
                .then(res => getCart(res, user.name))
                .catch(error => console.log(error))
        }
    }, [user])

    // useEffect hook that updates the cart in Firebase database when there is any change.
    useEffect(() => {
        if(user){
            set(ref(database, 'carts/' + user.name), state)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    // Function triggered to get the cart from Firebase and save it in the cart state.
    const getCart = (response, user) => dispatch({
        type: "GET_CART",
        payload: {response, user}
    })

    // Function to add an item to the cart
    const addItem = (item, state) => dispatch({
        type: 'ADD_ITEM',
        payload: item
    })

    // Function to remove 1 item from the cart
    const removeOneItem = (item) => dispatch({
        type: 'REMOVE_ITEM',
        payload: item
    })

    // Function to empty the items in the cart
    const emptyCart =() => dispatch({
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