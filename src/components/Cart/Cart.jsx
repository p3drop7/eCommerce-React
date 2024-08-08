import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { AiFillDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./Cart.css"

function Cart({handleClick}) {

  const { cart, removeOneItem } = useContext(CartContext)

  return (
    <section className='cart-list-container'>
      <IoMdClose className='close-icon' onClick={handleClick}/>
      <h4>Your Cart</h4>
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
                          <AiFillDelete onClick={()=>removeOneItem(item)}/>
                        </div>
                      </div>
                    </article>
                  )
              })
              : <p>Your cart is empty</p>
        }
    </section>
  )
}

export default Cart