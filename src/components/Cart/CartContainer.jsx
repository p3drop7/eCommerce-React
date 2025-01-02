import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { UserContext } from '../../context/UserContext'
import { IoMdClose } from "react-icons/io";
import Cart from "./Cart.jsx"
import "./Cart.css"

/* 
This component is the container that acts as the controller module for the Cart component.
It has the changePurchaseVisibity prop, which is a function used to show/hide the cart list.
*/
function CartContainer({changePurchaseVisibility}) {

  console.log(changePurchaseVisibility)
  // Cart state with all of data and functions from CartContext.jsx.
  const { cart, removeOneItem, emptyCart, cartVisibility, changeCartVisibility } = useContext(CartContext)

  console.log(changeCartVisibility)
  // User context with the user data from UserContext.jsx
  const { user, login } = useContext(UserContext)

  return (
    <section className={ cartVisibility === true ? "cart-list-container-visibility-true" : "cart-list-container-visibility-false"}>
      <IoMdClose className='close-icon' onClick={changeCartVisibility}/>
      <h2>Your Cart</h2>
        <div className='cart-list-container'>
            {
              ( user === false || user === undefined || user === "Incorrect Pasword" || user === "User not registered")
                ? <button onClick={login}>Log in</button>
                : <Cart 
                    cart={cart}
                    removeOneItem={removeOneItem} 
                    user={user} 
                    emptyCart={emptyCart} 
                    changePurchaseVisibility={changePurchaseVisibility}
                    changeCartVisibility={changeCartVisibility}
                  />
            }
        </div>
    </section>
  )
}

export default CartContainer