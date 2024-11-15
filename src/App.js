import { useEffect } from "react";
import { UserProvider } from "./context/UserContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ProductCardContainer from "./components/ProductCard/ProductCardContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContainer from "./components/Cart/CartContainer.jsx";
import useProducts from "./data/useProducts";
import CartIcon from "./components/Cart/CartIcon.jsx";
import "./App.css";

function App() {
  const { products, refreshProducts } = useProducts();

  useEffect(() => {
    refreshProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <UserProvider>
      <CartProvider>

        <header>
          <section>
            <h1>RCS - React Clothing Store</h1>
            <CartIcon />
            <CartContainer />
          </section>

          
          <NavBar />
        </header>
        <ProductCardContainer products={products} />
      </CartProvider>
      </UserProvider>

      <footer>
        <p>
          Created by Pedro Palencia: <a href="https://github.com/p3drop7" rel="noreferrer" target="_blank">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
