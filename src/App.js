import { useEffect, useState } from "react";
import { UserProvider } from "./context/UserContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ProductCardContainer from "./components/ProductCard/ProductCardContainer";
import CartContainer from "./components/Cart/CartContainer.jsx";
import useProducts from "./data/useProducts";
import CartIcon from "./components/Cart/CartIcon.jsx";
import logoStore from "./images/logoStore.png";
import UserAuthContainer from "./components/UserAuth/UserAuthContainer";
import PurchaseContainer from "./components/Purchase/PurchaseContainer.jsx";
import "./App.css";

// App is the main component that contains all of the components.
function App() {
  // This is the state with the products data brought from the useProducts.js custom hook.
  const { products, refreshProducts } = useProducts();

  // This sate stores and handles and visibility of the PurchaseContainer.jsx component.
  const [purchaseVisibility, setPurchaseVisibility] = useState(false);

  // This useEffect is triggered when the App is rendered, and it pulls and saves the products data.
  useEffect(() => {
    refreshProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePurchaseVisibility = () => {
    setPurchaseVisibility(!purchaseVisibility);
  };

  /*
  The app uses two providers to make the functions and data available in the whole app.
  <userProvider> is the provider from UserContext.jsx.
  <CartProvider> is the provider from CartContext.jsx.
  */
  return (
    <div className="App">
      
      <UserProvider>
        <CartProvider>
          
          <header>
            <img src={logoStore} alt="logo" className="logo" />
            <CartIcon />
            <CartContainer changePurchaseVisibility={changePurchaseVisibility} />
            <UserAuthContainer />
          </header>

          { purchaseVisibility === false ? (
              <ProductCardContainer products={products} />
            ) : (
              <PurchaseContainer changePurchaseVisibility={changePurchaseVisibility} />
          )}

        </CartProvider>
      </UserProvider>

      <footer>
        <p>
          Created by Pedro Palencia:{" "}
          <a href="https://github.com/p3drop7" rel="noreferrer" target="_blank">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
