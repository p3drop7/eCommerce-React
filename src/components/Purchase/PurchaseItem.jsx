import "./Purchase.css"

function PurchaseItem({product}) {
  return (
    <div className="purchaseItem">
        <p>- {product.title} - €{product.price} x {product.quantity} - Total: €{product.total}</p>
    </div>
  )
}

export default PurchaseItem