# ReactJS Store - eCommerce created with React.js
[https://p3drop7.github.io/eCommerce-React/](https://p3drop7.github.io/eCommerce-React/)

## Dependencies used:
- React dependencies like useState, useEffect, useReducer, useContext
- Firebase
- Fakestore API: [https://fakestoreapi.com/](https://fakestoreapi.com/)
- Github Pages (gh-pages)

## Components:
- Cart (list of items in the shopping cart saved in Firebase).
- ProductCard (Each item from the Fakestore API is shown as a card).
- Purchase (Screen to confirm the purchase).
- UserAuth (Component to manage the user authentication, saved in Firebase).
- Custom hooks like useFirebase to connect the app to Firebase and useProducts to fetch the Fakestore API data.
- Reducers like cartReducer and userReducer to manage the data structure for the cart and the user credentials.
- Context components like CartContext and UserContext to manage the global state and data for the cart and the user credentials.

## Available Scripts

After cloning the repository, in the project directory, you can run:

### `npm install`
Installs all the dependencies required for the project.

### `npm start`
Runs the app in the development mode on [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder.

### Deployment
Github Pages was used to deploy the App and provide a preview, which can be accessed through:\
[https://p3drop7.github.io/eCommerce-React/](https://p3drop7.github.io/eCommerce-React/)

