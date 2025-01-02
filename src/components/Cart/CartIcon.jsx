import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";

/* 
This component is used to show the total items in the cart.
It also works as a button to open the cart.jsx component with the list items.
*/
function CartIcon() {

  // Here we use the CartContext.jsx to bring the info about the cart.
  // Here the funtion changeCartVisibility is used to open/close the cart list.
  const { cart, changeCartVisibility } = useContext(CartContext)

  return (
    <div className='cartIcon-container' onClick={changeCartVisibility}>
      <p>{cart ? cart.totalQuantity : 0}</p>
      <FaShoppingCart className='cartIcon'/>
    </div>
  )
}

export default CartIcon