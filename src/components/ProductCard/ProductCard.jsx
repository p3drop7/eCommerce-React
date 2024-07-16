import "./ProductCard.css"

function ProductCard({item, addItem, removeOneItem}) {
  return (
    <article className="productCard">
        <div className="cardImage" style={{ backgroundImage: `url(${item.image})`}} />
        <h5>{item.title}</h5>
        <p>{item.price}€</p>
        <div>
          <button onClick={()=> addItem(item)}>+</button>
          <button onClick={()=> removeOneItem(item)}>-</button>
        </div>
    </article>
  )
}

export default ProductCard