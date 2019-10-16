import React from "react";
import Item from "./item";
import mockData from "./mockData";

const Home = () => {
  const [products, setProducts] = React.useState(mockData);

  React.useEffect(() => {
    setProducts(mockData);
  }, []);

  const renderProducts = () => {
    return products.map(product => {
      return (
        <Item
          key={product.id}
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
