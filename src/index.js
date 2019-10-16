import React from "react";
import { useRoutes, A } from "hookrouter";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Home from "./home";
import Cart from "./cart";
import productsReducer from "./store/reducers/products";

import "./App.css";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

const routes = {
  "/": () => <Home />,
  "/cart": () => <Cart />
};

function App() {
  return (
    <div className="App">
      <A href="/">Home</A>
      <A href="/cart">Cart</A>
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
