import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'

function Cart() {

    const { cart } = useContext(CartContext)
    console.log("CART in cart", cart)

  return (
    <section>
        <p>Cart</p>
        { cart.length > 0 ?
            cart.map(item =>{
                return <p key={item.id}>{item.title} - {item.quantity}</p>
            })
            : <p>Cart is empty</p>
        }
    </section>
  )
}

export default Cart