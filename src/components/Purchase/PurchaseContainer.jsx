import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Purchase.css"
import PurchaseItem from "./PurchaseItem"

function PurchaseContainer({ changePurchaseVisibility }) {
  const { cart } = useContext(CartContext)
  
  return (
    <div className="purchase-container">
      <h2>Your purchase</h2>
      <div className="purchase-products-container">
        { cart.products && cart.products.map(item => <PurchaseItem key={item.id} product={item}/>) }
      </div>
      <div className="purchase-buttons-container">
        <button className="purchase-confirm-button">Confirm Purchase</button>
        <button className="purchase-goBack-button" onClick={()=>changePurchaseVisibility()}>Go Back</button>
      </div>
    </div>
  )
}

export default PurchaseContainer