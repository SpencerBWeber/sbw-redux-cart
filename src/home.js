import React from "react";
import Item from "./item";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector(state => state.products.products);

  const renderProducts = () => {
    return products.map(product => {
      return (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      );
    });
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="products">{renderProducts()}</div>
    </div>
  );
};

export default Home;
