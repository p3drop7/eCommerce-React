import { AiFillDelete } from "react-icons/ai";
import "./Cart.css"

function Cart(cart, removeOneItem) {

  return (
    <>
      { cart.length > 0 ?
          cart.map(item =>{
            return (
              <article className='cart-item' key={item.id}>
                <div className='cart-item-image-container'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className='cart-item-description-container'>
                  <p>{item.title}</p>
                  <div className="item-quantity"> 
                    <p>{item.quantity}</p>
                    <AiFillDelete className='delete-icon' onClick={()=>removeOneItem(item)}/>
                  </div>
                  </div>
              </article>
          )})
        : <p>Your cart is empty</p>
      }
    </>
  )
}

export default Cart