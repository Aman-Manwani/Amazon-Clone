import React, { useContext } from "react";
import { StoreContext } from "../StateProvider/stateProvider";
import "./Product.css";

function Product({id,title ,image,price,rating}) {
  const {state, dispatch} = useContext(StoreContext);
  // const {basket} = state;


  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
          id: id,
          title:title,
          image:image,
          price:price,
          rating:rating,
      }
    })
  }

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
            .map((_,i)=>{
              return(
                <p key={i}>⭐</p>
              )
            }
            )
          }
        </div>
      </div>
      <img src={image} alt="Lean Statrup" />
      <button onClick={addToBasket}  className="add_basket_btn">Add to Basket</button>
    </div>
  );
}

export default Product;
