import './App.css';
import { CartProvider } from './context/CartContext.jsx';
import ProductCardContainer from './components/ProductCard/ProductCardContainer';
import useProducts from './data/useProducts';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';


function App() {

  const { products, refreshProducts } = useProducts();

  const handleClick =()=> {
    refreshProducts()
  }

  return (
    <div className="App">
      <h1>RCS - React Clothing Store</h1>
      <section>
        <CartProvider>
          <Cart/>
        </CartProvider>
      </section>

      <NavBar/>

      <header id="home-header">HEADER</header>

      <button onClick={handleClick}>REFRESH DATA</button>
      
      <CartProvider>
        <ProductCardContainer products={products} />
      </CartProvider>



      <section id="about">ABOUT</section>

      <footer>
        FOOTER
      </footer>


    </div>
  );
}

export default App;
