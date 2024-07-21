import React, { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    // Function to add an item to the cart
    const addItem = (item) => {
        console.log(cart.find( element => element.id === item.id ))
        // If the item is in the cart, we add 1 to the item
        if( cart.find( element => element.id === item.id )){
            console.log("PASA POR AQUI")
            const index = cart.findIndex(element => element.id === item.id)
            const newQuantity = cart[index].quantity + 1
            cart.splice(index, 1)
            const newCart = [...cart, {id: item.id, title: item.title, quantity: newQuantity}]
            setCart(newCart)
            return
        }

        // if the item is not in the cart, we add 1 new
        console.log("PASA POR FINAL")
        const newCart = [...cart, {id: item.id, title: item.title, quantity: 1}]
        setCart(newCart)
    }

    // Function to remove 1 item counter from the cart
    const removeOneItem = (item) => {
        if( cart.find(element => element.id === item.id) ){
            const index = cart.indexOf(item.id)
            const newQuantity = cart[index].quantity - 1
            
            if(newQuantity === 0){
                cart.splice(index, 1)
            }else{
                cart.splice(index, 1)
                const newCart = [...cart, {id: item.id, title: item.title, quantity: newQuantity}]
                setCart(newCart)
            }
        }
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addItem,
            removeOneItem
        }}>
            {children}
        </CartContext.Provider>
    )
}