import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";

function CartIcon() {
  
    const { cart, changeCartVisibility } = useContext(CartContext)

  return (
    <div className='cartIcon-container' onClick={changeCartVisibility}>
      <p>{cart ? cart.totalQuantity : 0}</p>
      <FaShoppingCart className='cartIcon'/>
    </div>
  )
}

export default CartIcon