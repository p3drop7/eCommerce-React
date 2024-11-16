import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { UserContext } from '../../context/UserContext'
import { IoMdClose } from "react-icons/io";
import Cart from "./Cart.jsx"
import "./Cart.css"

function CartContainer({changePurchaseVisibility}) {

  const { cart, removeOneItem, emptyCart, cartVisibility, changeCartVisibility } = useContext(CartContext)
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