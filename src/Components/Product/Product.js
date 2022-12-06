import React from "react";
import "./Product.css";

function product({title ,image,price,rating}) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(rating)
            .fill()
            .map((_)=>
            <p>⭐</p>
            )
          }
        </div>
      </div>
      <img src={image} alt="Lean Statrup" />
      <button className="add_basket_btn">Add to Basket</button>
    </div>
  );
}

export default product;
