import React from "react";

const Item = props => {
  return (
    <div className="item">
      <img src="https://source.unsplash.com/random" alt="img" />
      <div className="meta">
        <div className="top-level">
          <p>{props.name}</p>
          <p>${props.price}</p>
        </div>

        <p>{props.description}</p>
        <div className="button">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
