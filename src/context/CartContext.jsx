import React, { createContext, useReducer, useState, useEffect, useContext } from "react";
import { cartReducer, initialCartState } from "../reducers/cartReducer";
import { child, get, set, ref } from "firebase/database";
import { database } from "../data/useFirebase";
import { UserContext } from "./UserContext";

export const CartContext = createContext()

export function CartProvider({children}) {

    //State that opens/closes the cart list
    const [cartVisibility, setCartVisibility] = useState(false)

    const [state, dispatch] = useReducer (cartReducer, initialCartState)
    const { user } = useContext(UserContext)

    // Get the cart on the first render if there is any
    useEffect(() => {
        if ( user === null || user === undefined || user === "Incorrect Pasword" || user === "User not registered"){
            return
        } else {
            get( child ( ref(database), "carts/"))
                .then(res => res.val())
                .then(res => getCart(res, user.userName))
                .catch(error => console.log(error))
        }
    }, [user])

    // Update the cart in Firebase database when there is any change
    useEffect(() => {
        if(user){
            set(ref(database, 'carts/' + user.userName), state)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])
    
    const getCart = (response, user) => dispatch({
        type: "GET_CART",
        payload: {response, user}
    })

    // Function to add an item to the cart
    const addItem = (item, state) => dispatch({
        type: 'ADD_ITEM',
        payload: item
    })

    // Function to remove 1 item counter from the cart
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