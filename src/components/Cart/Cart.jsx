import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css"

function Cart() {

  const { cart, removeOneItem } = useContext(CartContext)

  return (
    <section className='cart-container'>
        { cart.length > 0 ?
            cart.map(item =>{
                return (
                  <article className='cart-item' key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.title}</p>
                      <div>
                        <p>{item.quantity}</p>
                        <AiFillDelete value={{ style: { verticalAlign: 'bottom' } }} onClick={()=>removeOneItem(item)}/>
                      </div>
                    </div>
                  </article>
                )
            })
            : <p>Cart is empty</p>
        }
        <div>
          <FaShoppingCart />
          <p>{cart.length}</p>
        </div>
    </section>
  )
}

export default Cart