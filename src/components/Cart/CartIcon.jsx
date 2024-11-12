import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";

function CartIcon() {
  
    const { cart, changeCartVisibility } = useContext(CartContext)

    /*
    const getCartLength =()=>{
      let cartLength = 0
      cart.forEach(item => {
        cartLength = cartLength + item.quantity
      })
      return cartLength
    } */

  return (
    <>
      {//<FaShoppingCart className='cart-icon' onClick={changeCartVisibility} /> {getCartLength()}
      }
      <FaShoppingCart className='cart-icon' onClick={changeCartVisibility} />
    </>
  )
}

export default CartIcon