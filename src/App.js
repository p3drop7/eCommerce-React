import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";
import ProductCardContainer from "./components/ProductCard/ProductCardContainer";
import useProducts from "./data/useProducts";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import CartIcon from "./components/Cart/CartIcon.jsx";

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
          </section>
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
