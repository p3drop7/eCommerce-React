import { useEffect, useState } from "react";
import { UserProvider } from "./context/UserContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ProductCardContainer from "./components/ProductCard/ProductCardContainer";
import CartContainer from "./components/Cart/CartContainer.jsx";
import useProducts from "./data/useProducts";
import CartIcon from "./components/Cart/CartIcon.jsx";
import logoStore from "./images/logoStore.png"
import UserAuthContainer from './components/UserAuth/UserAuthContainer'
import PurchaseContainer from "./components/Purchase/PurchaseContainer.jsx";
import "./App.css";

function App() {
  const { products, refreshProducts } = useProducts();
  const [purchaseVisibility, setPurchaseVisibility] = useState(false)

  useEffect(() => {
    refreshProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changePurchaseVisibility=()=>{
    setPurchaseVisibility(!purchaseVisibility)
  }
  
  return (
    <div className="App">
      <UserProvider>
      <CartProvider>

        <header>
          <img src={logoStore} alt="logo" className="logo"/>
          <CartIcon />
          <CartContainer changePurchaseVisibility={changePurchaseVisibility}/>
          <UserAuthContainer />
        </header>

        {
          purchaseVisibility === false
            ? <ProductCardContainer products={products} /> 
            : <PurchaseContainer changePurchaseVisibility={changePurchaseVisibility}/>
        }
        
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
