import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

/* 
This component acts as the controller module for the product card component.
It pulls the the list of productos from the prop "products"
*/
function ProductCardContainer({ products }) {
  // This pulls the addItem function from CartContext.jsx to add 1 item to the cart in Firebase
  const { addItem } = useContext(CartContext);

  // The map method creates each card with the info of the product (image, title, price, etc.).
  return (
    <section className="ProductCardContainer">
      {products
        ? products.map((item) => (
            <ProductCard key={item.id} item={item} addItem={addItem} />
          ))
        : "Loading ..."}
    </section>
  );
}

export default ProductCardContainer;
