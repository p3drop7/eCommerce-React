import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import PurchaseItem from "./PurchaseItem"
import { database } from "../../data/useFirebase"
import { UserContext } from "../../context/UserContext"
import { ref, set } from "firebase/database"
import "./Purchase.css"

/*
PurchaseContainer is the controller module for the Purchase component.
This component is the screen that shows the final list of items with a button for the user to confirm the purchaase.
This component passes the purchase list info (CartContext.jsx state from Firebase) to the PurchaseItem.jsx component.
It also handes the purchase, it means to confirm the purchase or not.
If the purchased is confirmed, it is stored in Firebase.
*/
function PurchaseContainer({ changePurchaseVisibility }) {

  // Cart info from CartContext.jsx
  const { cart, emptyCart } = useContext(CartContext)

  // User info from UserContext.jsx
  const { user } = useContext(UserContext)

  // State to handle the visibility once the purchase is confimed.
  const [puchaseIsConfirmed, setPuchaseIsConfirmed] = useState(false)

  // Function to confirm the purchase and save it in Firebase.
  const confirmPurchase=()=>{
    //Each purchase is saveed with an ID taken from the current date.
    const purchaseID = Date.now()
    const order = {
      orderId: purchaseID,
      user: user.name, 
      products: cart.products,
      totalPrice: cart.totalPrice,
      totalQuantity: cart.totalQuantity
    }

    // Here the purchase is saved in "orders/" in Firebase and the Cart state is emptied.
    set(ref(database, 'orders/' + purchaseID), order)
    emptyCart()
    setTimeout(() => {
      changePurchaseVisibility()
      setPuchaseIsConfirmed(!puchaseIsConfirmed)
    }, 3000);
  }
  
  // The visibility of the purchase list and the confirmation screen are handled by the puchaseIsConfirmed state.
  return (
    <div className="purchase-container">
      <h2>Your purchase</h2>
      <div className="purchase-order-container">
        { cart &&
          <div className="purchase-productsList">
          { cart.products.map(item => <PurchaseItem key={item.id} product={item}/>) }
        </div>
        }
        
        
        { 
          (puchaseIsConfirmed === false && cart) &&
            <div className="purchase-buttons-container">
                <button className="purchase-confirm-button" onClick={()=> {
                  confirmPurchase()
                  setPuchaseIsConfirmed(!puchaseIsConfirmed)
                }}>Confirm Purchase</button>
                <button className="purchase-goBack-button" onClick={()=> changePurchaseVisibility()}>Go Back</button>
              
            </div>
        }
        
        { 
          (puchaseIsConfirmed === true && !cart) &&
            <div className="confirmation-message">
              <h2>Thank for your puchase</h2>
              <p>You will be redirected to the store...</p>
            </div> 
        }
      </div>

      { 
        (puchaseIsConfirmed === false && !cart) &&
        <button className="purchase-goBack-button" onClick={()=> changePurchaseVisibility()}>Go Back</button>
      }
    </div>
  )
}

export default PurchaseContainer