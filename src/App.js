import React from "react";
import { useRoutes, A } from "hookrouter";

import Home from "./home";
import Cart from "./cart";
import "./App.css";

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

export default App;
