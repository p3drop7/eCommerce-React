import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import PurchaseItem from "./PurchaseItem"
import { database } from "../../data/useFirebase"
import { UserContext } from "../../context/UserContext"
import { ref, set } from "firebase/database"
import "./Purchase.css"

function PurchaseContainer({ changePurchaseVisibility }) {
  const { cart, emptyCart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const [puchaseIsConfirmed, setPuchaseIsConfirmed] = useState(false)

  // Function to confirm the purchase and save it in FB
  const confirmPurchase=()=>{
    //Each purchase has an ID taken from the current date
    const purchaseID = Date.now()
    const order = {
      orderId: purchaseID,
      user: user.name, 
      products: cart.products,
      totalPrice: cart.totalPrice,
      totalQuantity: cart.totalQuantity
    }
    // Saving the purchase to "orders/" in FB
    set(ref(database, 'orders/' + purchaseID), order)
    emptyCart()
    setTimeout(() => {
      changePurchaseVisibility()
      setPuchaseIsConfirmed(!puchaseIsConfirmed)
    }, 3000);
  }
  
  return (
    <div className="purchase-container">
      <h2>Your purchase</h2>
      <div className="purchase-order-container">
        { cart &&
          <div className="purchase-productsList">
          { cart.products.map(item => <PurchaseItem key={item.id} product={item}/>) }
        </div>
        }
        
        
        { (puchaseIsConfirmed === false && cart) &&
            <div className="purchase-buttons-container">
                <button className="purchase-confirm-button" onClick={()=> {
                  confirmPurchase()
                  setPuchaseIsConfirmed(!puchaseIsConfirmed)
                }}>Confirm Purchase</button>
                <button className="purchase-goBack-button" onClick={()=> changePurchaseVisibility()}>Go Back</button>
              
            </div>
        }
        
        { (puchaseIsConfirmed === true && !cart) &&
            <div className="confirmation-message">
              <h2>Thank for your puchase</h2>
              <p>You will be redirected to the store...</p>
            </div> 
        }
      </div>

      { (puchaseIsConfirmed === false && !cart) &&
        <button className="purchase-goBack-button" onClick={()=> changePurchaseVisibility()}>Go Back</button>
      }
    </div>
  )
}

export default PurchaseContainer