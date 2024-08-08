import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart.jsx';

function CartIcon() {
    const { cart } = useContext(CartContext)

    const [visibility, setVisibility] = useState(false)

    const handleClick =()=> {
        setVisibility(!visibility)
        console.log(visibility)
    }

  return (
    <div className='cart-container'>
        <FaShoppingCart className='cart-icon' onClick={handleClick} /> {cart.length}
        {
            visibility === true ? <Cart handleClick={handleClick}/> : null
        }
        
    </div>
  )
}

export default CartIcon