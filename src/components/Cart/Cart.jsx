import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";

function Cart() {

  const { cart } = useContext(CartContext)

  return (
    <section>
        <p>Cart</p>
        { cart.length > 0 ?
            cart.map(item =>{
                return <p key={item.id}>{item.title} - {item.quantity}</p>
            })
            : <p>Cart is empty</p>
        }
        <div>
          <FaShoppingCart />
          <p>{cart.length}</p>
        </div>
    </section>
  )
}

export default Cart