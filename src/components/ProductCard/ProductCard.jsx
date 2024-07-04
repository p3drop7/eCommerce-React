import "./ProductCard.css"

function ProductCard({item}) {
  return (
    <article className="productCard">
        <div className="cardImage" style={{
          backgroundImage: `url(${item.image})`
        }} />
        <h4>{item.title}</h4>
        <p>{item.price}€</p>
        <p className="productDescription">{item.description}</p>
    </article>
  )
}

export default ProductCard