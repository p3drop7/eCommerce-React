import "./ProductCard.css"
import { BiCartAdd } from "react-icons/bi";

function ProductCard({item, addItem}) {
  
  return (
    <article className="productCard">
        <div className="cardImage" style={{ backgroundImage: `url(${item.image})`}} />
        <div className="product-title">{item.title}</div>
        <p>{item.price}€</p>
        <BiCartAdd className="add-button" onClick={()=> addItem(item)}/>
    </article>
  )
}

export default ProductCard