import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const total = useSelector(state => state.products.total);

  return (
    <div className="">
      <h1>Cart</h1>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
