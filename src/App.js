import { useEffect } from "react";
import { CartProvider } from "./context/CartContext.jsx";
import ProductCardContainer from "./components/ProductCard/ProductCardContainer";
import Cart from "./components/Cart/Cart.jsx";
import CartIcon from "./components/Cart/CartIcon.jsx";
import useProducts from "./data/useProducts";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import TestCart from "./components/TestCart/TestCart.jsx";
import { TestCartProvider } from "./components/TestCart/TestCartContext.jsx";

function App() {
  const { products, refreshProducts } = useProducts();

  useEffect(() => {
    refreshProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <CartProvider>
        <header>
          <section>
            <h1>RCS - React Clothing Store</h1>
            <CartIcon />
            <Cart />
          </section>

          <TestCartProvider>
            <TestCart />
          </TestCartProvider>
          
          <NavBar />
        </header>
        <ProductCardContainer products={products} />
      </CartProvider>

      <footer>
        <p>
          Created by Pedro Palencia: <a href="https://github.com/p3drop7" rel="noreferrer" target="_blank">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
