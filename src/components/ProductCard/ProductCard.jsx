import "./ProductCard.css"
import { BiCartAdd } from "react-icons/bi";

/*
This component acts as the view module for the Product card component.
Each ProductCard.jsx component is a card with the item (product) info.
*/
function ProductCard({item, addItem}) {
  
  // Each item has a title, image, price, and a button to be added to the cart state and then stored in Firebase.
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