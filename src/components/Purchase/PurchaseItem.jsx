import "./Purchase.css"

// This component acts the view module of each item in the PurchaseContainer.jsx list.
function PurchaseItem({product}) {
  return (
    <div className="purchaseItem">
        <p>- {product.title} - €{product.price} x {product.quantity} - Total: €{product.total}</p>
    </div>
  )
}

export default PurchaseItem