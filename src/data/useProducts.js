// This custom hook is used to call and pull the information from the Fakestore API.
// https://fakestoreapi.com/

import { useState } from "react";

// This endpoint has a list with several products organized in a json file.
const API_ENDPOINT = "https://fakestoreapi.com/products/";

function useProducts() {
  const [products, setProducts] = useState();

  // Function to fetch the products and save them in the state.
  const refreshProducts = () => {
    return fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(res => setProducts(res));
  };

  return { products, refreshProducts };
}

// The products list is exported, as well as the function "refreshProducts" used to call the API and pull the info.
export default useProducts;