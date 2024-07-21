import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";
import ProductCardContainer from "./components/ProductCard/ProductCardContainer";
import useProducts from "./data/useProducts";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const { products, refreshProducts } = useProducts();

  const handleLoad = () => {
    refreshProducts();
  };

  return (
    <div className="App" onLoad={handleLoad()}>
      <h1>RCS - React Clothing Store</h1>
      <CartProvider>
        <section>
          <Cart />
        </section>
        <NavBar />
        <header id="home-header">HEADER</header>
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
