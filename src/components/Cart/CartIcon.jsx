import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";

function CartIcon() {
  
    const { cart, changeCartVisibility } = useContext(CartContext)

  return (
    <>
      <p>{cart ? cart.totalQuantity : 0}</p>
      <FaShoppingCart className='cart-icon' onClick={changeCartVisibility} />
    </>
  )
}

export default CartIcon