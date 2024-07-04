import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProductCardContainer from './components/ProductCard/ProductCardContainer';
import useProducts from './data/useProducts';


function App() {

  const { products, refreshProducts } = useProducts();

  const handleClick =()=> {
    refreshProducts()
  }

  return (
    <div className="App">
      <h1>RCS - React Clothing Store</h1>

      <NavBar/>

      <header id="home-header">HEADER</header>

      <button onClick={handleClick}>REFRESH DATA</button>
      
      <ProductCardContainer products={products} />



      <section id="about">ABOUT</section>

      <footer>
        FOOTER
      </footer>


    </div>
  );
}

export default App;
