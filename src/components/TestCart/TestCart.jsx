import React, { useContext, useEffect } from 'react'
import { TestCartContext } from './TestCartContext'
import { useState } from 'react'

function TestCart() {

    const {testCart} = useContext(TestCartContext)
    const [userCart, setUserCart] = useState(false)

    useEffect(() => {
      setUserCart(testCart.user)
    }, [testCart])
    

  return (
    <div>
        <h1>Test Cart</h1>
        {
          userCart ? 
            <div>
              <p>Total price: {userCart.totalPrice}</p>
              <p>Total items: {userCart.totalQuantity}</p>
            
              <div>
                <p>{userCart.products.prodID.name}</p>
                <p>{userCart.products.prodID.quantity} X €{userCart.products.prodID.price}</p>
                <p>Total price: {userCart.products.prodID.totalPRice}</p>
              </div>    
              
            </div>
          : <p>No items in the cart</p>
        }
    </div>
  )
}

export default TestCart