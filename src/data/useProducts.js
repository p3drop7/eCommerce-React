import { useState } from "react";

const API_ENDPOINT = "https://fakestoreapi.com/products/";

function useProducts() {
  const [products, setProducts] = useState();

  const refreshProducts = () => {
    return fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(res => setProducts(res));
  };

  return { products, refreshProducts };
}

export default useProducts;