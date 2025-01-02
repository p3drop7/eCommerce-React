import { AiFillDelete } from "react-icons/ai";
import "./Cart.css"

/* 
Cart Component that acts as the View module to show the cart data with the list of products.
It takes the props from the CartContainer.jsx component as the cart and user state, and functions for the buttons.
*/
function Cart({cart, removeOneItem, emptyCart, user, changePurchaseVisibility, changeCartVisibility}) {

  /* 
  This component also handles the visibility of the cart list (Cart.jsx) and the purchase visibility (PurchaseCointainer.jsx).
  changeCartVisibility shows/hides the cart list
  changePurchaseVisibility handles the purchase list.
  */
  return (
    <>
      <h3>{user && user.name}</h3>
      <div className="cartInfo">
        <p>Items: {cart != null ? cart.totalQuantity : 0}</p><p>Total: € {cart != null ? cart.totalPrice : 0}</p>
      </div>
        {cart ? 
            <div className="cartInfo-buttons">
              <button className="confirm-button" onClick={()=> {
                changePurchaseVisibility()
                changeCartVisibility()
                }}>Confirm purchase</button>
              <button className="empyCart-button" onClick={()=> emptyCart()}>Empty Cart</button>
            </div>
          : null
        } 
      {
        cart 
          ? cart.products.map(item => {
            return (
              <article className='cart-item' key={item.id}>
                <div className='cart-item-image-container'>
                  <img src={item.image} alt={item.title} />
                </div>
                
                <div className='cart-item-description-container'>
                  <p>{item.title}</p>
                  <div className="item-quantity"> 
                    <p>{item.quantity} X € {item.price}</p>
                    <p>Total: {item.total}</p>
                    <AiFillDelete className='delete-icon' onClick={()=> removeOneItem(item)}/>
                  </div>
                </div>
              </article>
            )
          })
          : <p>Your cart is empty</p>
      }
    </>
  )
}

export default Cart